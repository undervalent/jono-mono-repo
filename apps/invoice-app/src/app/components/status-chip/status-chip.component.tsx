import React from 'react';
import { capitalize } from './utils';
import './status-chip.styles.css';
import classNames from 'classnames';

interface Props {
  status: string;
}

const generateColors = (status: string): any => {
  if (!status) return '';

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
    case 'draft':
      return {
        color: '#979797',
        background: 'rgba(223, 227, 250, 0.06)',
      };
  }
};
export const StatusChip: React.FC<Props> = ({ status = '' }) => {
  const capStatus = capitalize(status);
  const { color, background } = generateColors(status);

  const classes = classNames({
    'status-chip': true,
    'status-chip__dynamic': true,
  });
  const tagClasses = classNames({
    'status-chip__tag': true,
    'status-chip__tag-dynamic': true,
  });
  const style = {
    '--background': background,
    '--color': color,
  } as React.CSSProperties;

  return (
    <div className={classes} style={style}>
      <span className={tagClasses} style={style}></span>
      {capStatus}
    </div>
  );
};
