import styled from "styled-components";
import { Link } from "react-router-dom";

export const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  color: white;
  font-weight: 700;
  font-size: 1.3rem;
  line-height: 1.9rem;
  gap: 1rem;
  cursor: pointer;
  text-decoration: none;
  color: var(--dark-charlie);
`;
