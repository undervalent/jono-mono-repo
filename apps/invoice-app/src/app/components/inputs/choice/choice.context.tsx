import React from 'react';

const defaultState: string[] = [];
const ChoiceContext = React.createContext(defaultState);

interface Props {
  children: React.ReactNode;
  value: string[];
}
export const ChoiceProider: React.FC<Props> = ({ children, value }) => {
  return (
    <ChoiceContext.Provider value={value}>{children}</ChoiceContext.Provider>
  );
};
