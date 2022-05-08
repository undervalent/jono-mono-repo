import React from "react";
import _ from "lodash";
import { FaComment, FaChevronUp } from "react-icons/fa";
import { generateCommentCount } from "../../lib/utils";
import { useSelectedFeedbackItem } from "../../lib/hooks";
import {
  Wrapper,
  Headline,
  Text,
  Category,
  Comments,
  UpVotes,
  Header,
  ContentWrapper,
} from "./request-item.styles";

interface IProps {
  id: string;
}

export const RequestItem: React.FC<IProps> = ({ id }) => {
  const [{ requestItem, hasUpVoted }, { incrementCount }] =
    useSelectedFeedbackItem(id);
  const { title, category, upvotes, description, comments } = requestItem;
  const commentCount = generateCommentCount(comments);

  const handleUpvoteCLick = () => !hasUpVoted && incrementCount();
  if (!id) return null;
  const iconColor = hasUpVoted ? "var(--light-alpha)" : "var(--primary-bravo)";
  return (
    <Wrapper>
      <ContentWrapper>
        <Header>
          <Headline to={`/feedback/${id}`}>{title}</Headline>
          <Text>{description}</Text>
          <Category>{_.capitalize(category)}</Category>
        </Header>

        <UpVotes onClick={handleUpvoteCLick} disabled={hasUpVoted}>
          <FaChevronUp color={iconColor} />
          {upvotes}
        </UpVotes>

        <Comments>
          <FaComment color="#CDD2EE" />
          {commentCount}
        </Comments>
      </ContentWrapper>
    </Wrapper>
  );
};
