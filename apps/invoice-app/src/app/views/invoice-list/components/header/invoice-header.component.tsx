import React from 'react';
import { Button } from '../../../../components/buttons';

import { Wrapper } from './invoice-header.styles';
import { StatusFilter } from './components/status-filter';
import { setFormActive } from '../../../../state/ui';
import { useSelector, useDispatch } from 'react-redux';
import { getFilteredInvoices, getFilter } from '../../../../state/invoice';

const generateInvoiceLabel = (count: number, selected: string) => {
  if (count === 0) {
    return 'No Invoices';
  }
  return `There are ${count} ${selected === 'all' ? '' : selected} invoices`;
};

export const InvoiceHeader = () => {
  const dispatch = useDispatch();
  const invoiceFilter = useSelector(getFilter);
  const invoices = useSelector(getFilteredInvoices);
  const invoiceNumber = generateInvoiceLabel(invoices.length, invoiceFilter);
  const handdleNewInvoice = () => dispatch(setFormActive('new'));
  return (
    <Wrapper>
      <div>
        <h2>Invoices</h2>
        <p className="invoice-header__text">{invoiceNumber}</p>
      </div>
      <div>
        <StatusFilter
        // options={dropdownOptions}
        // returnValue={handleUpdate}
        // selectedValue={invoiceFilter}
        // labelValue="Filter"
        />
        {/* <CheckboxDropown /> */}
      </div>

      <div>
        <Button type="primary" size="small" icon onClick={handdleNewInvoice}>
          New Invoice
        </Button>
      </div>
    </Wrapper>
  );
};
