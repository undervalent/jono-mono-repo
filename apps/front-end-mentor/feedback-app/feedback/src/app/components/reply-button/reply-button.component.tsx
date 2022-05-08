import React from "react";
import { Button } from "./reply-button.styles";

interface IProps {
  handleClick(): void;
  name: string;
}

export const ReplyButton: React.FC<IProps> = ({ handleClick, name }) => {
  return (
    <Button onClick={handleClick}>
      Reply <span className="visually-hidden"> to {name}</span>
    </Button>
  );
};
