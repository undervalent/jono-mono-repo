// @ts-nocheck

import styled from 'styled-components';
import * as Switch from '@radix-ui/react-switch';

export const Container = styled.div`
  display: flex;
  gap: 1rem;
`;

export const SwitchRoot = styled(Switch.Root)`
  all: unset;
  width: 4rem;
  height: 2rem;
  background-color: ${({ theme }) => theme.switchBg};
  border-radius: ${({ theme }) => theme.radius.pill};
  position: relative;
`;

export const SwitchThumb = styled(Switch.Thumb)`
  display: block;
  width: 1.4rem;
  height: 1.4rem;
  background-color: var(--white);
  border-radius: ${({ theme }) => theme.radius.pill};
  transition: transform 100ms;
  transform: translateX(0.5rem);
  will-change: transform;

  &[data-state='checked'] {
    transform: translateX(2rem);
  }
`;

export const IconWrapper = styled.span`
  color: ${({ theme }) => theme.switchBg};
`;
