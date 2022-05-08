import React from "react";
import { useEditFormInfo } from "./useEditFormInfo";
import { categoryOptions, statusOptions } from "../../../../../lib/constants";

export function useFormData(): [
  state: {
    title: string;
    status: { label: string; value: string };
    selected: { label: string; value: string };
    description: string;
  },
  handlers: {
    handleClick(): void;
    setSelected: React.Dispatch<
      React.SetStateAction<{ label: string; value: string }>
    >;
    setStatus: React.Dispatch<
      React.SetStateAction<{ label: string; value: string }>
    >;
    setTitle: React.Dispatch<any>;
    setDescription: React.Dispatch<any>;
  }
] {
  const [{ requestItem }, { updateRequest }] = useEditFormInfo();
  const category = categoryOptions.filter(
    (el) => el.value === requestItem?.category
  )[0];
  const selectedStatus = statusOptions.filter(
    (el) => el.value === requestItem?.status
  )[0];
  const [selected, setSelected] = React.useState(category);
  const [status, setStatus] = React.useState(selectedStatus);
  const [title, setTitle] = React.useState(requestItem?.title || "");
  const [description, setDescription] = React.useState(
    requestItem?.description || ""
  );

  const handlers = React.useMemo(
    () => ({
      handleClick: () => {
        const values = {
          category: selected.value,
          status: status.value,
          title,
          description,
        };

        updateRequest(values);
      },
      setSelected,
      setStatus,
      setTitle,
      setDescription,
    }),
    [description, selected.value, status.value, title, updateRequest]
  );
  const state = { title, status, selected, description };
  return [state, handlers];
}
