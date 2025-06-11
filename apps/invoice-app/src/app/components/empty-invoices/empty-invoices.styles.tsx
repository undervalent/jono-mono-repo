import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div<{ dark: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 12rem;

  .empty-invoices__dark {
    color: var(--secondary-bravo);
  }
  .empty-invoices__headline {
    color: ${({ dark }) => (dark ? "#fff" : "var(--dark-alpha)")};
    margin-bottom: 2.4rem;
  }
  .empty-invoices__text {
    color: ${({ dark }) =>
      dark ? "var(--primary-delta)" : "var(--primary-delta)"};
  }
  .empty-invoices__text-bold {
    font-weight: 700;
  }
`;
