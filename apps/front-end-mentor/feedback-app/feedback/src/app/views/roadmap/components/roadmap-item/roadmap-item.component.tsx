import React from "react";
import _ from "lodash";
import { FaComment, FaChevronUp } from "react-icons/fa";

import { ProductRequest } from "@feedback/types";
import { Badge } from "./components/badge";

import {
  Wrapper,
  Headline,
  Text,
  Category,
  Comments,
  UpVotes,
  Header,
  ContentWrapper,
  Footer,
} from "./roadmap-item.styles";

interface IProps {
  data: ProductRequest;
  colorBorder?: string;
}

export const RoadMapItem: React.FC<IProps> = ({ data, colorBorder }) => {
  const { title, category, upvotes, description, comments } = data;
  const commentCount = comments ? comments.length : "0";

  const handleUpvoteCLick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Wrapper to={`/feedback/${data.id}`}>
      <ContentWrapper colorBorder={colorBorder}>
        <Badge color={colorBorder} />
        <Header>
          <Headline>{title}</Headline>
          <Text>{description}</Text>
          <Category>{_.capitalize(category)}</Category>
        </Header>

        <Footer>
          <UpVotes onClick={handleUpvoteCLick}>
            <FaChevronUp color="var(--primary-bravo)" />
            {upvotes}
          </UpVotes>

          <Comments>
            <FaComment color="#CDD2EE" />
            {commentCount}
          </Comments>
        </Footer>
      </ContentWrapper>
    </Wrapper>
  );
};
