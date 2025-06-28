import React from 'react';
import { Dialog } from 'radix-ui';
import { Button } from '@components/buttons';
import './delete-dialogue.styles.css';
import { useSelector, useDispatch } from 'react-redux';
import {
  setDialogActive,
  getIsDialogActive,
  getDialogOptions,
} from '@state/ui';
import { getInvoiceById, removeInvoiceById } from '@state/invoice';

export const DeleteDialogue: React.FC = () => {
  const dispatch = useDispatch();
  const isActive = useSelector(getIsDialogActive);
  const options = useSelector(getDialogOptions);
  const invoice = useSelector(getInvoiceById(options || ''));

  const handleDelete = () => {
    if (invoice) {
      dispatch(removeInvoiceById(invoice.id));
      dispatch(setDialogActive(false));
    }
  };

  const close = () => {
    dispatch(setDialogActive(false));
  };
  return (
    <Dialog.Root open={isActive} modal>
      <Dialog.Portal>
        <Dialog.Overlay className="dialog-overlay" />
        <Dialog.Content className="dialog-content">
          <Dialog.Title asChild>
            <h2 className="dialog-header">Confirm Deletion</h2>
          </Dialog.Title>
          <Dialog.Description asChild>
            <p className="dialog-text">
              Are you sure you want to delete invoice {invoice?.id}? This action
              cannot be undone.
            </p>
          </Dialog.Description>
          <div className="dialog-menu">
            <Button type="tertiary" size="small" onClick={close}>
              Cancel
            </Button>
            <Button type="danger" size="small" onClick={handleDelete}>
              Delete
            </Button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
