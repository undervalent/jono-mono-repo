import React from "react";

import { FormInput } from "../../../../components/form-input";
import { FormDropdown } from "../../../../components/dropdowns";
import { Button, StyledLinkButton } from "../../../../components/button";
import { categoryOptions, statusOptions } from "../../../../lib/constants";
import EditIcon from "../../../../assets/shared/icon-edit-feedback.svg";

import { Wrapper, Img, MenuWrapper } from "../../../shared/styles";
import { ButtonWrapper, DeleteWrapper } from "./edit-form.styles";

import { useEditFormInfo } from "./hooks/useEditFormInfo";
import { useFormData } from "./hooks/useFormData";

export const EditForm = () => {
  const [{ requestItem, from }, { deleteRequest }] = useEditFormInfo();
  const [
    { title, status, selected, description },
    { handleClick, setSelected, setStatus, setTitle, setDescription },
  ] = useFormData();

  if (!requestItem) return null;

  return (
    <Wrapper>
      <Img src={EditIcon} alt="Edit icon" />
      <h2>{requestItem?.title}</h2>
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
      <FormDropdown
        selectedValue={status}
        setSelected={setStatus}
        options={statusOptions}
        id="status"
        label="Update Status"
        description="Change feedback state"
      />
      <FormInput
        label="Feedback Detail"
        description="Include any specific comments on what should be improved, added, etc."
        id="feedbackDetail"
        inputType="textarea"
        value={description}
        onChange={setDescription}
      />
      <MenuWrapper>
        <ButtonWrapper>
          <DeleteWrapper>
            <Button variant="danger" onClick={deleteRequest}>
              Delete
            </Button>
          </DeleteWrapper>
          <StyledLinkButton to={from || "/"} variant="tertiary">
            Cancel
          </StyledLinkButton>

          <Button variant="primary" onClick={handleClick}>
            Save Changes
          </Button>
        </ButtonWrapper>
      </MenuWrapper>
    </Wrapper>
  );
};
