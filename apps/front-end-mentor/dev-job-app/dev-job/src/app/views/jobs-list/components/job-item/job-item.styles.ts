import styled from "styled-components";
interface IWrapper {
  background: string;
}
export const Wrapper = styled.article<IWrapper>`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.elementBackground};
  position: relative;
  padding: 5rem 3.2rem 3.2rem 3.2rem;
  border-radius: var(--order-radius);

  .logo-wrapper {
    position: absolute;
    top: -2.5rem;
  }
  .position-text {
    text-decoration: none;
    font-size: 2rem;
    line-height: 2.12rem;
    margin-top: 1.3rem;
    margin-bottom: 1.7rem;
  }
  .position-text a {
    color: ${({ theme }) => theme.headers};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
  .info-circle {
    font-size: 1.8rem;
  }
  .info-text {
    line-height: 1.6rem;
    display: block;
    order: -1;
  }
  .company-text {
    line-height: 1.6rem;
    display: block;
  }
  .location-text {
    font-weight: 700;
    font-size: 1.4rem;
    line-height: 1.4rem;
    color: var(--primary-alpha);
    display: block;
    margin-top: 4.5rem;
  }
`;
