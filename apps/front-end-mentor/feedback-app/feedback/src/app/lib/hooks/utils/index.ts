import _ from "lodash";
import { nanoid } from "nanoid";

import { IComment, ProductRequest, IUser, IReply } from "@feedback/types";

export function getItemIndex(allItems: ProductRequest[], id: string) {
  const index = allItems.findIndex((el) => el.id === id);
  return index;
}

export function updateCount(requestItem: ProductRequest) {
  const updatedItem = { ...requestItem };
  _.set(updatedItem, "upvotes", updatedItem.upvotes + 1);
  return updatedItem;
}

export function generateComment(commentData: { user: IUser; content: string }) {
  const comment = {
    id: nanoid(),
    replies: [],
    ...commentData,
  };

  return comment;
}

export function updateItemWithComment({
  requestItem,
  newComment,
}: {
  requestItem: ProductRequest;
  newComment: IComment;
}) {
  const newItem = { ...requestItem };
  const comments: IComment[] = _.get(newItem, "comments", []);
  const newComments = [...comments, newComment];
  _.set(newItem, "comments", newComments);
  return newItem;
}

export function updateItemReplies(
  requestItem: ProductRequest,
  replyToInfo: {
    username: string;
    commentId: string;
  },
  newReply: IReply
) {
  const newItem = _.cloneDeep(requestItem);
  const comments = _.get(newItem, "comments", []);
  const idx = comments.findIndex((el) => el.id === replyToInfo.commentId);
  const allReplies = _.get({ ...requestItem }, `comments[${idx}].replies`, []);
  _.set(newItem, `comments[${idx}].replies`, [...allReplies, newReply]);
  return newItem;
}
