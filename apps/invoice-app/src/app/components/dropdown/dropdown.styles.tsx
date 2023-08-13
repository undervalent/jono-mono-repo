import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;

  .dropdown__content {
    display: none;
    left: 0;
    padding: 2.4rem;
    position: absolute;
    top: 100%;
    background-color: #fff;
    z-index: 9999;
    box-shadow: 0px 10px 20px rgba(72, 84, 159, 0.25);
    border-radius: 8px;
  }

  &:hover .dropdown__content {
    display: block;
  }
`;
