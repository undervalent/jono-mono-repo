import React from "react";
import { useRecoilValue } from "recoil";

import { IComment } from "@feedback/types";
import { ReplyButton } from "../../../../components/reply-button";
import { UserImage } from "../../../../styles";
import { Wrapper, Header, Headline, Username, Content } from "./comment.styles";
import { ReplyList } from "./components/reply-list";
import { ReplyPost } from "./components/reply-post";
import { useReplyToState } from "../../../../lib/hooks";
import { replyToState } from "../../../../state";
interface IProps {
  comment: IComment;
}

export const Comment: React.FC<IProps> = ({ comment }) => {
  const { user, content, id } = comment;
  const replies = comment?.replies ? comment.replies : [];
  const { name, username, image } = user;
  const { commentId } = useRecoilValue(replyToState);
  const [{ setReplyingTo }] = useReplyToState();
  const handleClick = () => setReplyingTo({ username, commentId: id });

  return (
    <Wrapper>
      <Header>
        <UserImage src={image} alt={name} />
        <div>
          <Headline>{name}</Headline>
          <Username>@{username}</Username>
        </div>
        <ReplyButton name={name} handleClick={handleClick} />
      </Header>
      <Content>{content}</Content>
      <ReplyList replies={replies} commentId={id} />
      {commentId === id && <ReplyPost />}
    </Wrapper>
  );
};
