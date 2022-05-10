import React from "react";
import { useRecoilState } from "recoil";
import { requestsAPI } from "../../../../../state";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

import {
  useLocationFrom,
  useSelectedFeedbackItem,
} from "../../../../..//lib/hooks";
import { updateList } from "./utils";
interface IValues {
  category: string;
  status: string;
  title: string;
  detail: string;
}

export function useEditFormInfo(): [state: any, handlers: any] {
  const { id } = useParams();
  const [{ from }] = useLocationFrom();
  const [{ requestItem }] = useSelectedFeedbackItem(id);
  const [allRequests, setAllRequests] = useRecoilState(requestsAPI);
  const navigate = useNavigate();

  const handlers = React.useMemo(
    () => ({
      deleteRequest: () => {
        if (!id) return null;
        const newRequestList = allRequests.filter((el) => el.id !== id);
        setAllRequests(newRequestList);
        navigate("/");
        return null;
      },
      updateRequest: (values: IValues) => {
        const newItem = {
          ...requestItem,
          ...values,
        };
        const newRequestList = updateList(allRequests, newItem);
        setAllRequests(newRequestList);
        navigate("/");
      },
    }),
    [allRequests, id, navigate, setAllRequests, requestItem]
  );
  const state = { requestItem, from };
  return [state, handlers];
}
