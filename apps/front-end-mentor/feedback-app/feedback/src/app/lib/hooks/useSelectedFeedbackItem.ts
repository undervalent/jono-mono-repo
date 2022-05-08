import React from "react";
import { useRecoilState, useRecoilValue, useResetRecoilState } from "recoil";
import {
  requestItemState,
  activeUser,
  replyToState,
  clickedUpvoteState,
} from "../../state";

import {
  updateCount,
  generateComment,
  updateItemWithComment,
  updateItemReplies,
} from "./utils";

/**
 * It returns the request item state for the given id.
 * @param {string | undefined} id - string | undefined
 * @returns The request item state.
 */
export function useSelectedFeedbackItem(id: string | undefined): [
  state: {
    requestItem: any;
    comments: any;
    hasUpVoted: boolean;
  },
  handlers: {
    incrementCount(): void;
    addNewComment(comment: string): void;
    addNewReply(reply: string): void;
  }
] {
  const [requestItem, setRequestItem] = useRecoilState(requestItemState(id));
  const [upvotes, setUpvotes] = useRecoilState(clickedUpvoteState);
  const hasComments = requestItem && Boolean(requestItem?.comments);
  const comments = (hasComments && requestItem.comments) || [];
  const user = useRecoilValue(activeUser);
  const replyToInfo = useRecoilValue(replyToState);
  const resetReplyTo = useResetRecoilState(replyToState);
  const hasUpVoted = Boolean(id && upvotes?.[id]);

  const handlers = React.useMemo(
    () => ({
      incrementCount: () => {
        if (!id || !requestItem) return;
        const newItem = updateCount(requestItem);
        setRequestItem(newItem);
        setUpvotes((prev) => {
          return {
            ...prev,
            [id]: true,
          };
        });
      },
      addNewComment: (comment: string) => {
        if (!id || !requestItem) return;
        const newComment = generateComment({
          user,
          content: comment,
        });
        const newItem = updateItemWithComment({ requestItem, newComment });
        setRequestItem(newItem);
      },
      addNewReply: (reply: string) => {
        const newReply = {
          content: reply,
          replyingTo: replyToInfo.username,
          user,
        };
        if (!id || !requestItem) return;
        const newItem = updateItemReplies(requestItem, replyToInfo, newReply);
        setRequestItem(newItem);
        resetReplyTo();
      },
    }),
    /* Creating a new type called "Request" and it is setting the properties of the type. */
    [id, replyToInfo, requestItem, setRequestItem, user]
  );
  const state = { requestItem, comments, hasUpVoted };
  return [state, handlers];
}
