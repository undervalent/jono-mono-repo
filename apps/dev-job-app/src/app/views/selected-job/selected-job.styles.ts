import styled from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  position: relative;
  width: 100%;
`;
export const PageWrapper = styled.section`
  width: 100%;
  padding-bottom: 16rem;
  position: relative;

  .apply-button-wrapper {
    width: 100%;
  }
  .apply-button-wrapper button {
    width: 100%;
  }

  ${media.greaterThan("medium")`
  .apply-button-wrapper {
    width: auto;
  }
  .apply-button-wrapper button {
    width: auto;
  }
  `}
`;

export const Header = styled.header`
  border-radius: 6px;
  min-height: 8rem;
  padding: 1.6rem;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};
  flex-direction: column;
  position: relative;

  .logo-wrapper {
    position: absolute;
    top: -2.5rem;
  }
  .selected-headline {
    margin-top: 3.3rem;
    margin-bottom: 1.3rem;
  }
  .company-link {
    font-size: 1.6rem;
    line-height: 1.6rem;
    text-align: center;
    color: var(--grey-bravo);
    text-decoration: none;
  }

  ${media.greaterThan("medium")`
      flex-direction: row;
      padding: 4rem;
      height: 14rem;

      .logo-wrapper {
        top: 0;
        left: 0;
      }
      .headline-wrapper {
        margin-left: 14rem;

      }
      .selected-headline {
        margin-top: 0;
        margin-bottom: 1.3rem;
      }
      .button-wrapper {

      }
  `}
`;

export const Content = styled.article`
  margin-top: 3.2rem;
  padding: 4rem 2.4rem 2.4rem 2.4rem;
  background: ${({ theme }) => theme.elementBackground};

  .content-header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 4rem;
  }
  .content-header__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    margin-bottom: 5rem;
  }
  .info-circle {
    font-size: 1.8rem;
  }

  .headline {
    margin: 1.2rem 0;
    font-size: 2rem;
    line-height: 2rem;
  }
  .subhead {
    font-size: 2rem;
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
  }

  ${media.greaterThan("medium")`
  .content-header__info {
    margin: 0;
  }
  .headline {
    font-size: 2.8rem;
  }

  `}
`;
export const ContentItem = styled.div`
  > h4 {
    margin-top: 4rem;
    margin-bottom: 2.8rem;
  }
`;
export const Footer = styled.footer`
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
  background: ${({ theme }) => theme.elementBackground};

  .footer__info {
    display: none;
  }

  .footer-content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 9.6rem;
    padding: 2.4rem;
    width: 100%;
  }

  ${media.greaterThan("medium")`
  .footer__info {
  display: flex;
  flex-direction: column;
}
  .footer-content {
    justify-content: space-between;
    max-width: 68.9rem;
    margin-left: auto;
    margin-right: auto;
  }

  `}
  ${media.greaterThan("large")`
  .footer-content {
    max-width: 111rem;
  }
  `}
`;
export const UnorderedList = styled.ul`
  list-style-type: none;
  counter-reset: list;
  padding: 0;
  margin: 2.4rem 0 0 0;
  text-indent: -4rem;
  margin-left: 4rem;

  > li:before {
    content: "• ";
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--primary-alpha);
    margin-right: 2.8rem;
  }
  > li {
    margin-bottom: 1rem;
  }
`;

export const OrderedList = styled.ol`
  list-style-type: none;
  counter-reset: list;
  padding: 0;
  margin: 2.4rem 0 0 0;
  text-indent: -4rem;
  margin-left: 4rem;
  > li {
    margin-bottom: 1rem;
  }
  > li:before {
    counter-increment: list;
    content: counters(list, " ") " ";
    font-weight: bold;
    font-size: 1.6rem;
    line-height: 2.6rem;
    color: var(--primary-alpha);
    margin-right: 2.8rem;
  }
`;
