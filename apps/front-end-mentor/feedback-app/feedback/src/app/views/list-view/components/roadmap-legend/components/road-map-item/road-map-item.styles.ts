import styled from "styled-components";
import {
  IRoadMapName,
  roadMapNameColors,
} from "../../../../../../lib/constants";

export const Wrapper = styled.li`
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 2.6rem 2fr 1fr;
  align-items: center;
`;

export const Circle = styled.div<{ name: IRoadMapName }>`
  background: ${({ name }) => roadMapNameColors[name]};
  content: "";
  width: 0.8rem;
  height: 0.8rem;
  margin-right: 1.6rem;
  border-radius: 10rem;
`;

export const Count = styled.div`
  text-align: right;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 2.3rem;
`;
