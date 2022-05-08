import React from "react";
import { IComment } from "@feedback/types";
import { generateCommentCount } from "../../../../lib/utils";

import { Comment } from "../comment";
import { Wrapper, Headline } from "./comment-list.styles";
interface IProps {
  comments: IComment[];
}

export const CommentList: React.FC<IProps> = ({ comments }) => {
  const count = generateCommentCount(comments);
  const title = `${count} Comments`;
  return (
    <Wrapper>
      <Headline>{title}</Headline>
      <div>
        {comments.map((comment) => (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </Wrapper>
  );
};
