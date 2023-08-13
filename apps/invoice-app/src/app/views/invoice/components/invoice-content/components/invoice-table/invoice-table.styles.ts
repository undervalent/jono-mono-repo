import styled from "styled-components";
import media from "styled-media-query";

export const TableWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;

  .invoice-table {
    background: ${({ theme }) => theme.invoiceTable};
    border-radius: 8px 8px 0px 0px;
    padding: 2.4rem;
    width: 100%;
  }
  .total-wrapper {
    background: ${({ theme }) => theme.invoiceTableTotal};
    border-radius: 0px 0px 8px 8px;
    height: 8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 3.1rem 2.4rem;
    width: 100%;
  }
  .total-wrapper__label {
    color: white;
  }
  .total-wrapper__total {
    font-size: 2rem;
    line-height: 3.2rem;
    text-align: right;
    letter-spacing: -0.0416667rem;
    font-weight: bold;
    color: #fff;
  }
`;
