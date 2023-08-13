import styled from "styled-components";
interface IWrapper {
  background: string;
}
export const Wrapper = styled.article<IWrapper>`
  display: flex;
  flex-direction: column;

  background: ${({ theme }) => theme.elementBackground};
  position: relative;
  padding: ${({ theme }) =>
    `${theme.spacing.size13} ${theme.spacing.size8} ${theme.spacing.size8}  ${theme.spacing.size8}`};
  border-radius: var(--border-radius);

  .logo-wrapper {
    position: absolute;
    top: -2.5rem;
  }
  .position-text {
    text-decoration: none;
    font-size: ${({ theme }) => theme.fontSize.fontSize3};
    line-height: ${({ theme }) => theme.lineHeight.lineHeight2};
    margin-top: ${({ theme }) => theme.spacing.size3};
    margin-bottom: ${({ theme }) => theme.spacing.size4};
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
    line-height: ${({ theme }) => theme.lineHeight.lineHeight2};
    display: block;
    order: -1;
  }
  .company-text {
    line-height: ${({ theme }) => theme.lineHeight.lineHeight2};
    display: block;
  }
  .location-text {
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    font-size: ${({ theme }) => theme.fontSize.fontSize1};
    line-height: ${({ theme }) => theme.lineHeight.lineHeight1};
    color: var(--primary-alpha);
    display: block;
    margin-top: ${({ theme }) => theme.spacing.size11};
  }
`;
