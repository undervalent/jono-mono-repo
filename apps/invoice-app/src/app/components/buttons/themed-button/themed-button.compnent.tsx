import React from 'react';
import classNames from 'classnames';
import '../styles/deault-button.css';
import './themed-button.styles.css';

interface Props {
  type: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const OriginalButton: React.FC<Props> = ({ type, children }) => {
  const classes = classNames({
    'default-button': true,
    'themed-button': true,
    [`themed-button__${type}`]: true,
  });
  return <button className={classes}>{children}</button>;
};

export const ThemedButton: React.FC<Props> = ({ type, children }) => {
  return <OriginalButton type={type}>{children}</OriginalButton>;
};

export default ThemedButton;
