import React from "react";
import * as Styled from "./styles";
import { AiTwotoneMail } from 'react-icons/ai';
import { PiLockKeyFill } from 'react-icons/pi';

interface IProps {
  name: string;
  placeholder: string;
  type: 'password'|'email';
  required?: boolean;
  label: string;
  errorMessage?: string;
}


function getIcon(type: string) {
  switch (type) {
    case 'password':
return <PiLockKeyFill color="#737373" />
    case 'email':
return <AiTwotoneMail color="#737373" />
    default:
      return null;
  }

}

export const Input = ({ name, errorMessage, placeholder, label, ...rest }: IProps) => {

  const icon = getIcon(rest.type);

  return (
    <Styled.FormField name={name}>
      <Styled.IconWrapper>
      {icon}</Styled.IconWrapper>
      <Styled.Label errorMessage={!!errorMessage}>{label}</Styled.Label>
      <Styled.Input name={name} placeholder={placeholder} {...rest} />
      {!!errorMessage && <Styled.FormMessage>{errorMessage}</Styled.FormMessage>}
    </Styled.FormField>
  );
};

export default Input;
