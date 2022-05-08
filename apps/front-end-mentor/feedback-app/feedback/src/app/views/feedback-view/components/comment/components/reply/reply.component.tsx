import React from "react";
import { ReplyButton } from "../../../../../../components/reply-button";
import { IReply } from "@feedback/types";
import { UserImage } from "../../../../../../lib/styles";
import {
  Wrapper,
  Header,
  Headline,
  Username,
  Content,
  Replying,
} from "./reply.styles";

import { useReplyToState } from "../../../../../../lib/hooks";
interface IProps {
  reply: IReply;
  commentId: string;
}

export const Reply: React.FC<IProps> = ({ reply, commentId }) => {
  const { user, content, replyingTo } = reply;
  const [{ setReplyingTo }] = useReplyToState();
  if (!user) return null;

  const { name, username, image } = user;
  const handleClick = () => setReplyingTo({ username, commentId });
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
      <Content>
        <Replying>{replyingTo} </Replying>
        {content}
      </Content>
    </Wrapper>
  );
};
