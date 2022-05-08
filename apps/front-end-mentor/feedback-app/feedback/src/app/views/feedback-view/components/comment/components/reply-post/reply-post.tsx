import React from "react";
import { useFeedback } from "../../../../../../lib/context";
import { Textarea } from "../../../../../../components/text-area";
import { Button } from "../../../../../../components/button";
import { errors } from "../../../../../../lib/constants";

import { Wrapper } from "./reply-post.styles";

export const ReplyPost = () => {
  const [value, setValue] = React.useState("");
  const [error, setError] = React.useState("");
  const { addNewReply } = useFeedback();
  const handleClick = () => {
    if (value) {
      addNewReply(value);
      setError("");
    }
    setError(errors.emptyText);
  };
  return (
    <Wrapper>
      <Textarea
        label=""
        placeholder="Type your comment here"
        value={value}
        onChange={setValue}
        error={error}
      />
      <Button variant="primary" onClick={handleClick}>
        Post Reply
      </Button>
    </Wrapper>
  );
};
