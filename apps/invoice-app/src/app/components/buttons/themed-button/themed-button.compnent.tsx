import React from 'react';
import { getTheme } from '../../../state/ui';
import { useSelector } from 'react-redux';
import classNames from 'classnames';
import '../styles/deault-button.css';
import './themed-button.styles.css';

interface Props {
  type: 'primary' | 'secondary';
  children: React.ReactNode;
}

export const OriginalButton: React.FC<Props> = ({ type, children }) => {
  const theme = useSelector(getTheme);
  const classes = classNames({
    'default-button': true,
    'themed-button': true,
    [`themed-button__${type}-${theme}`]: true,
  });
  return <button className={classes}>{children}</button>;
};

export const ThemedButton: React.FC<Exclude<Props, 'theme'>> = ({
  type,
  children,
}) => {
  return <OriginalButton type={type}>{children}</OriginalButton>;
};

export default ThemedButton;
