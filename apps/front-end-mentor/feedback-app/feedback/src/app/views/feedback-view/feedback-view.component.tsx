import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "./components/header";
import { RequestItem } from "../../components/request-item";
import { CommentList } from "./components/comment-list";
import { CommentForm } from "./components/comment-form";
import { FeedbackProvider } from "../../lib/context";

import { useSelectedFeedbackItem } from "../../lib/hooks";
import { ContentWrapper } from "../../lib/styles";

export const FeedbackView = () => {
  const { id } = useParams();
  const [{ comments }, { addNewComment, addNewReply }] =
    useSelectedFeedbackItem(id);
  if (!id) return null;

  return (
    <FeedbackProvider value={{ addNewReply, addNewComment }}>
      <ContentWrapper>
        <Header />
        <RequestItem id={id} />
        <CommentList comments={comments} />
        {id && <CommentForm />}
      </ContentWrapper>
    </FeedbackProvider>
  );
};

export default FeedbackView;
