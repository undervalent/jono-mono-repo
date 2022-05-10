import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { requestsAPI, activeUser } from "../../state";

import {
  updateCount,
  generateComment,
  updateItemWithComment,
  updateItemReplies,
} from "./utils";

export function useUpdateItem(id: string) {
  const [allRequests, setAllRequests] = useRecoilState(requestsAPI);
  const user = useRecoilValue(activeUser);

  // const handlers = React.useMemo(
  //   () => ({
  //     incrementCount: () => {
  //       const newRequestList = updateCount(allRequests);
  //       setAllRequests(newRequestList);
  //     },
  //     addNewComment: (comment: string) => {
  //       const newComment = generateComment({
  //         user,
  //         content: comment,
  //       });
  //       const newRequestList = updateItemWithComment({
  //         allRequests,
  //         newComment,
  //       });
  //       setAllRequests(newRequestList);
  //     },
  //     // addNewReply: (reply: string) => {},
  //   }),
  //   [allRequests, setAllRequests]
  // );
  return [];
}
