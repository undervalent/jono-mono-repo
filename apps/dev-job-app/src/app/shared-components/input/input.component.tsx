import * as React from "react";
import * as Styled from "./input.styles";

export function Input({ ...props }) {
  return (
    <Styled.InputContainer>
      {props.icon}
      <Styled.Input {...props} />
    </Styled.InputContainer>
  );
}

export default Input;
