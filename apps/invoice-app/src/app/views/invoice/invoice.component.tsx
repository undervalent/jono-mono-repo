import React from 'react';

import { InvoiceContent, DeleteDialogue, InvoiceMenu } from './components';
import { StatusChip } from '../../components/status-chip';

import { FaChevronLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedInvoice, setActiveId } from '../../state/invoice';
import { setDialogActive, setDialogOptions } from '../../state/ui';
import './invoice.styles.css';

export const Invoice = () => {
  const dispatch = useDispatch();
  const invoice = useSelector(getSelectedInvoice);

  const resetId = () => dispatch(setActiveId(''));

  const open = () => {
    dispatch(setDialogActive(true));
    dispatch(setDialogOptions(invoice?.id));
  };

  if (!invoice) return null;
  const { status } = invoice;

  return (
    <>
      <DeleteDialogue />
      <section>
        <div className="back-button-wrapper">
          <button
            className="invoice__back-button"
            type="button"
            onClick={resetId}
          >
            <FaChevronLeft color="#7C5DFA" /> <span>Go back</span>
          </button>
        </div>

        <div className="invoice">
          <div className="invoice__top">
            <div className="status-wrapper">
              <span className="status">Status</span>
              {status && <StatusChip status={status} />}
            </div>
            <div className="invoice__header">
              <InvoiceMenu open={open} />
            </div>
          </div>
        </div>
        <div className="invoice">
          <InvoiceContent />
        </div>
      </section>
      <div className="invoice__menu-wrapper">
        <div className="invoice">
          <InvoiceMenu open={open} />
        </div>
      </div>
    </>
  );
};
