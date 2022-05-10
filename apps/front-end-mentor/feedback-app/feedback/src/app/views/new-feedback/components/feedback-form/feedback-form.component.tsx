import React from "react";
import { nanoid } from "nanoid";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import { requestsAPI } from "../../../../state";

import { Button, StyledLinkButton } from "../../../../components/button";

import { FormInput } from "../../../../components/form-input";
import { FormDropdown } from "../../../../components/dropdowns";
import { categoryOptions } from "../../../../lib/constants";
import NewIcon from "../../../../assets/shared/icon-new-feedback.svg";

import { Wrapper, Img, MenuWrapper } from "../../../shared/styles";
import { useLocationFrom } from "../../../../lib/hooks";
import { ButtonWrapper } from "./feedback-form.styles";

export const FeedbackForm = () => {
  const setRequests = useSetRecoilState(requestsAPI);
  const [selected, setSelected] = React.useState(categoryOptions[0]);
  const [title, setTitle] = React.useState("");
  const [detail, setDetail] = React.useState("");
  const [{ from }] = useLocationFrom();
  const navigate = useNavigate();

  const handleSubmit = () => {
    const output = {
      id: nanoid(),
      title: title,
      category: selected.value,
      upvotes: 0,
      status: "",
      description: detail,
      comments: [],
    };
    setRequests((prev) => [...prev, output]);
    navigate("/");
  };

  return (
    <Wrapper>
      <Img src={NewIcon} alt="editIcon" />
      <h2>Create New Feedback</h2>

      <FormInput
        label="Feedback Title"
        description="Add a short descriptive headline"
        id="feedbackTitle"
        inputType="textfield"
        value={title}
        onChange={setTitle}
      />

      <FormDropdown
        selectedValue={selected}
        setSelected={setSelected}
        options={categoryOptions}
        id="feedbackCategory"
        label="Category"
        description="Choose a category for your feedback"
      />

      <FormInput
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
        id="feedbackDetail"
        inputType="textarea"
        value={detail}
        onChange={setDetail}
      />
      <MenuWrapper>
        <ButtonWrapper>
          <div className="cancel-btn">
            <StyledLinkButton variant="tertiary" to={from || "/"}>
              Cancel
            </StyledLinkButton>
          </div>
          <div className="add-feedback-btn">
            <Button variant="primary" onClick={handleSubmit}>
              Add Feedback
            </Button>
          </div>
        </ButtonWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};
