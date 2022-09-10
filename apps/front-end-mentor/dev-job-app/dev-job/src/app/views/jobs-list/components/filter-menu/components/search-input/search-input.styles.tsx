import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  width: 100%;
  margin-left: 1rem;
  border: none;
  height: 2.6rem;
  background: transparent;
  color: ${({ theme }) => theme.input};
  font-size: 1.6rem;
`;
