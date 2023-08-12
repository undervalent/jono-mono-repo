import styled from "styled-components";

export const InvoiceContainer = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.invoiceItem};
  box-shadow: 0 1rem 1rem -1rem rgba(72, 84, 159, 0.100397);
  border-radius: 0.8rem;
  padding: 3.2rem 2rem;
  margin-bottom: 1.6rem;
  flex: 1;
`;
