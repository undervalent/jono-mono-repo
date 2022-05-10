import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 6px;
  min-height: 8rem;
  padding: 0 1.6rem;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: stretch;
  justify-content: space-between;
  background: ${({ theme }) => theme.elementBackground};

  .divider {
    margin-right: 1rem;
    padding-right: 1rem;
    border-right: 1px solid rgba(110, 128, 152, 0.2);
  }
  .content {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    min-width: 100%;
  }
.content2 {
  padding: 2rem 1rem;
}
.last-divider {
  display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;
