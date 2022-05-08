import React from "react";
import { useSetRecoilState } from "recoil";
import { replyToState } from "../../state";

interface IReplyToState {
  username: string;
  commentId: string;
}

export function useReplyToState(): [
  handlers: {
    setReplyingTo(state: IReplyToState): void;
  }
] {
  const setReplying = useSetRecoilState(replyToState);

  const handlers = React.useMemo(
    () => ({
      setReplyingTo: (replyToInfo: IReplyToState) => setReplying(replyToInfo),
    }),
    [setReplying]
  );

  return [handlers];
}
