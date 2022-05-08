import React from "react";
import { IReply } from "@feedback/types";

import { Reply } from "../reply";
import { Wrapper } from "./reply-list.styles";

interface IProps {
  replies: IReply[];
  commentId: string;
}

export const ReplyList: React.FC<IProps> = ({ replies, commentId }) => {
  return (
    <Wrapper>
      {replies.map((reply) => (
        <Reply key={reply.content} reply={reply} commentId={commentId} />
      ))}
    </Wrapper>
  );
};
