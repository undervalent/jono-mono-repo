import styled from 'styled-components';
import media from 'styled-media-query';

export const Wrapper = styled.section`
  width: 100%;

  .invoice-content__header {
    margin-bottom: 2rem;
  }
  .invoice-content__description {
    margin-top: 0.8rem;
  }
  .invoice-content__headline-wrapper {
    margin-bottom: 3rem;
  }
  .invoice-content__headline {
    padding-top: 0.3rem;
    font-size: 1.6rem;
    line-height: 2.4rem;
    letter-spacing: -0.08rem;
  }
  .invoice-content__headline-address {
    font-size: 1.1rem;
    line-height: 1.8rem;
    letter-spacing: -0.0229167rem;
  }
  .invoice-content__headline-hash {
    color: var(--primary-delta);
  }
  .invoice-content__article {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .invoice-content__label {
    font-size: 1.2rem;
    line-height: 1.5rem;
    letter-spacing: -0.025rem;
    display: block;
    margin-bottom: 0.9rem;
  }
  .invoice-content__dates {
    margin-bottom: 3.2rem;
  }
  .invoice-content__client-address {
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.8rem;
    letter-spacing: -0.0229167rem;
    margin-top: 0.8rem;
  }

  ${media.greaterThan('medium')`
    align-items: center;
    width: 100%;
  .invoice-content__header {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
  }
  .invoice-content__headline-address {
    text-align: right;
  }
  .invoice-content__article {
    display: flex;
    justify-content: space-between;
    width: 100%;
    flex-wrap: wrap;
  }
  `}
`;
