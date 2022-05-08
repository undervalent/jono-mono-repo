import React from "react";
import { useParams } from "react-router-dom";

import { Header } from "./components/header";
import { EditForm } from "./components/edit-form";
import { useSelectedFeedbackItem } from "../../lib/hooks";
import { ContentWrapper } from "../../lib/styles";

export const EditFeedback = () => {
  const { id } = useParams();
  const [{ requestItem }] = useSelectedFeedbackItem(id);
  if (!requestItem) return null;

  return (
    <ContentWrapper>
      <Header />
      <EditForm />
    </ContentWrapper>
  );
};

export default EditFeedback;
