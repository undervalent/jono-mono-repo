import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.button`
  width: 100%;
  min-height: 7.2rem;
  margin-bottom: 1.6rem;
  max-height: 12.4rem;
  padding: 1.6rem;
  background: ${({ theme }) => theme.invoiceItem};
  border-radius: 0.8rem;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover,
  &:active {
    border-color: #7c5dfa;
  }

  .invoice-item__hash {
    color: var(--primary-delta);
  }

  .invoice-item__id {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
    font-weight: 700;
  }

  .invoice-item__text {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
    color: ${({ theme }) => theme.text};
  }
  .invoice-item__date {
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
  }
  .invoice-item__total {
    font-weight: 700;
    font-size: 1.6rem;
    line-height: 1.4rem;
    letter-spacing: -0.08rem;
  }

  ${media.lessThan("medium")`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 4rem;
    gap: 2.4rem;

    .invoice-item__text {
      grid-column-start: 2;
      grid-column-end: 3;
      grid-row-start: 1;
      grid-row-end: 1;
      text-align: right;
    }

    .invoice-item__date {
      grid-column-start: 1;
      grid-column-end: 1;
      grid-row-start: 2;
      grid-row-end: 2;
    }
    .invoice-item__total {
    grid-column-start: 1;
    grid-column-end: 1;
    grid-row-start: 2;
    grid-row-end: 2;
    margin-top: 2.5rem;
  }
  .invoice-item__chip {
    display: flex;
    justify-content: flex-end;
  }

    `}
  ${media.greaterThan("medium")`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .invoice-item__total {
    line-height: 2.4rem;
    margin-top: 0;
  }
  `}
`;
