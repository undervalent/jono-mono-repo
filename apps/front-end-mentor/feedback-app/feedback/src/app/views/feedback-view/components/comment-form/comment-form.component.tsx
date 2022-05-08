import React from "react";
import { Wrapper, Footer, Header } from "./comment-form.styles";
import { Textarea } from "../../../../components/text-area";
import { Button } from "../../../../components/button";
import { useFeedback } from "../../../../lib/context";
import { errors } from "../../../../lib/constants";

const maxCount = 225;

export const CommentForm = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  const { addNewComment } = useFeedback();

  const count = maxCount - value.length;
  const countNumber = count <= 0 ? 0 : count;

  const handleClick = () => {
    if (!value) {
      setError(errors.emptyText);
      return;
    }
    if (value.length < maxCount) {
      addNewComment(value);
      setValue("");
      setError("");
    } else {
      setError(errors.characterCount(maxCount));
    }
  };

  return (
    <Wrapper>
      <Header>
        <h2>Add Comment</h2>
      </Header>
      <Textarea
        label=""
        placeholder="Type your comment here"
        value={value}
        onChange={setValue}
        max={maxCount}
        error={error}
      />
      <Footer>
        <span>{countNumber} characters left</span>
        <Button variant="primary" onClick={handleClick}>
          Post Comment
        </Button>
      </Footer>
    </Wrapper>
  );
};
