import React from 'react';
import { capitalize } from './utils';
import { Wrapper } from './status-chip.styles';
interface Props {
  status: string;
}

export const StatusChip: React.FC<Props> = ({ status = '' }) => {
  const capStatus = capitalize(status);
  return (
    <Wrapper status={status}>
      <span className="status-chip__tag"></span>
      {capStatus}
    </Wrapper>
  );
};
