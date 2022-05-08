import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  background: radial-gradient(
    128.88% 128.88% at 103.9% -10.39%,
    #e84d70 0%,
    #a337f6 53.09%,
    #28a7ed 100%
  );
  height: 7.2rem;
  display: flex;
  padding: 0 2.4rem;
  align-items: center;
  justify-content: space-between;

  ${media.greaterThan("small")`
    background: radial-gradient(128.88% 128.88% at 103.9% -10.39%, #E84D70 0%, #A337F6 53.09%, #28A7ED 100%);
    border-radius: 1rem;
    width: 22.3rem;
    height: 17.8rem;
    flex-direction:row;
    align-items: flex-end;
    padding: 2.4rem;
  `}
`;

export const Header = styled.h1`
  color: white;
  font-weight: 700;
  font-size: 2rem;
  line-height: 2.9rem;
  letter-spacing: -0.025rem;
`;
export const Text = styled.p`
  color: white;
`;

export const ToggleDrawerBtn = styled.button`
  width: 4.4rem;
  height: 4.4rem;
`;
