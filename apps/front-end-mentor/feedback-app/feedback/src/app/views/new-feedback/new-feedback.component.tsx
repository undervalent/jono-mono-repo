import React from "react";
import { ContentWrapper } from "../../lib/styles";

import { Header } from "./components/header";
import { FeedbackForm } from "./components/feedback-form";

export const NewFeedback = () => {
  return (
    <ContentWrapper>
      <Header />
      <FeedbackForm />
    </ContentWrapper>
  );
};

export default NewFeedback;
