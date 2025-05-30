import React from 'react';
import { setFormActive } from '../../../../state/ui';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '../../../../components/buttons';
import { Wrapper } from './invoice-menu.styles';
import {
  markInvoiceAsPaid,
  getSelectedInvoice,
} from '../../../../state/invoice';

interface Props {
  open(): void;
}

export const InvoiceMenu: React.FC<Props> = ({ open }) => {
  const dispatch = useDispatch();
  const activeInvoice = useSelector(getSelectedInvoice);

  if (!activeInvoice) return null;
  const { status } = activeInvoice;
  const isPaid = status === 'paid';

  const handleMarkAsPaid = () => {
    dispatch(markInvoiceAsPaid(activeInvoice.id));
  };
  const handleEdit = () => {
    dispatch(setFormActive('edit'));
  };
  return (
    <Wrapper>
      <Button type="secondary" size="small" onClick={handleEdit}>
        Edit
      </Button>
      <Button type="danger" size="small" onClick={open}>
        Delete
      </Button>
      <Button
        type="primary"
        size="small"
        onClick={handleMarkAsPaid}
        disabled={isPaid}
      >
        Mark as Paid
      </Button>
    </Wrapper>
  );
};
