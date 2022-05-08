import React from "react";
import { useLocation } from "react-router-dom";

interface CustomState {
  from?: string;
}

export function useLocationFrom() {
  const location = useLocation();
  const { from } = location.state as CustomState;
  const state = {
    from: from || "/",
  };
  return [state];
}
