import React from "react";

interface IValue {
  addNewReply(reply: string): void;
  addNewComment(comment: string): void;
}

type ProviderProps = {
  children: React.ReactNode;
  value: IValue;
};

const FeedbackContext = React.createContext({
  addNewReply: (reply: string) => {},
  addNewComment: (comment: string) => {},
});

export function FeedbackProvider({ children, value }: ProviderProps) {
  return (
    <FeedbackContext.Provider value={value}>
      {children}
    </FeedbackContext.Provider>
  );
}

export function useFeedback() {
  const context = React.useContext(FeedbackContext);
  return context;
}
