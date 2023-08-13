import React from "react";
import { useRecoilValue } from "recoil";
import { Dialog } from "@reach/dialog";
import { Button } from "../../../../components/buttons";
import { themeState } from "../../../../state";
import "@reach/dialog/styles.css";
import "./delete-dialogue.styles.css";
interface Props {
  close(): void;
  isActive: boolean;
  handleDelete(): void;
  id: string;
}

export const DeleteDialogue: React.FC<Props> = ({
  close,
  isActive,
  handleDelete,
  id,
}) => {
  const theme = useRecoilValue(themeState);

  return (
    <Dialog
      isOpen={isActive}
      onDismiss={close}
      className={theme}
      aria-label="Delete confirmation"
    >
      <h1 className="dialog-header">Confirm Deletion</h1>
      <p className="dialog-text">
        Are you sure you want to delete invoice {id}? This action cannot be
        undone.
      </p>
      <div className="dialog-menu">
        <Button type="secondary" size="small" onClick={close}>
          Cancel
        </Button>
        <Button type="danger" size="small" onClick={handleDelete}>
          Confirm
        </Button>
      </div>
    </Dialog>
  );
};
