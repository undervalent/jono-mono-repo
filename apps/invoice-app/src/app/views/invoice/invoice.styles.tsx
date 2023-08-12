import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.section`
  .back-button-wrapper {
    margin-bottom: 2.5rem;
    padding-top: 2.2rem;
  }

  .status-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }
  .status {
    display: block;
    margin-right: 1.6rem;
  }
`;

export const InvoiceMenuWrapper = styled.div`
  ${media.greaterThan("small")`
    display: none;
  `}
`;
export const HeaderInvoiceMenuWrapper = styled.div`
  ${media.lessThan("small")`
    display: none;
  `}
`;

export const BackButton = styled.button`
  font-weight: bold;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8rem;
  cursor: pointer;
  color: ${({ theme }) => theme.headers};
`;
