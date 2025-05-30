import styled from 'styled-components';
import { ThemeProps } from '../../lib/types';
interface Props {
  status: string;
}

const generateColors = (status: string, theme: ThemeProps): any => {
  if (!status) return '';
  if (status === 'draft') {
    return { color: theme.draftText, background: theme.draftBg };
  }

  switch (status) {
    case 'paid':
      return {
        color: '#33d69f',
        background: 'rgba(51, 214, 159, 0.06)',
      };
    case 'pending':
      return {
        color: '#ff8f00',
        background: 'rgba(255, 143, 0, 0.06)',
      };
  }
};

export const Wrapper = styled.div<Props>`
  display: flex;
  width: 10.4rem;
  height: 4rem;
  border-radius: 6px;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  line-height: 1.5rem;
  letter-spacing: -0.025rem;
  font-weight: 700;
  color: ${({ status, theme }) => {
    const { color } = generateColors(status, theme);
    return color;
  }};
  background: ${({ status, theme }) => {
    const { background } = generateColors(status, theme);
    return background;
  }};

  .status-chip__tag {
    width: 0.8rem;
    height: 0.8rem;
    display: inline-block;
    margin-right: 0.5rem;
    border-radius: 10rem;
    background: ${({ status, theme }) => {
      const { color } = generateColors(status, theme);
      return color;
    }};
  }
`;
