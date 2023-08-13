import styled from "styled-components";

interface Props {
  alignment?: "left" | "right";
  darkened?: boolean;
}

export const TableHead = styled.th<Props>`
  text-align: ${({ alignment }) => alignment};
  font-weight: 500;
  font-size: 1.1rem;
  line-height: 1.8rem;
  letter-spacing: -0.0229167rem;
  padding-bottom: 3.2rem;
`;
export const TableCell = styled.td<Props>`
  text-align: ${({ alignment }) => alignment};
  font-weight: 700;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  color: ${({ darkened, theme }) => darkened && theme.headers};
  padding-bottom: 3.2rem;
`;
export const TableRow = styled.tr``;
