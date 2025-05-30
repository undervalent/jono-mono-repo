import React from 'react';

import {
  Wrapper,
  InvoiceMenuWrapper,
  HeaderInvoiceMenuWrapper,
  BackButton,
} from './invoice.styles';
import { InvoiceContainer } from './components/common-styles';
import { InvoiceContent, DeleteDialogue, InvoiceMenu } from './components';
import { StatusChip } from '../../components/status-chip';

import { FaChevronLeft } from 'react-icons/fa';
import { useSelector, useDispatch } from 'react-redux';
import { getSelectedInvoice, setActiveId } from '../../state/invoice';
import { setDialogActive, setDialogOptions } from '../../state/ui';
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
      <Wrapper>
        <div className="back-button-wrapper">
          <BackButton type="button" onClick={resetId}>
            <FaChevronLeft color="#7C5DFA" /> <span>Go back</span>
          </BackButton>
        </div>

        <InvoiceContainer>
          <div className="status-wrapper">
            <span className="status">Status</span>
            {status && <StatusChip status={status} />}
          </div>
          <HeaderInvoiceMenuWrapper>
            <InvoiceMenu open={open} />
          </HeaderInvoiceMenuWrapper>
        </InvoiceContainer>
        <InvoiceContainer>
          <InvoiceContent />
        </InvoiceContainer>
      </Wrapper>
      <InvoiceMenuWrapper>
        <InvoiceContainer>
          <InvoiceMenu open={open} />
        </InvoiceContainer>
      </InvoiceMenuWrapper>
    </>
  );
};
