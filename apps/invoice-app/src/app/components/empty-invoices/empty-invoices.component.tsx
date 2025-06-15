import React from 'react';
import './empty-invoice.css';
export const EmptyInvoices = () => {
  return (
    <div className="empty-invoices">
      <img src="public/assets/empty-value.svg" alt="" />
      <div>
        <h2 className={`empty-invoices__headline`}>There is nothing here</h2>
        <p className="empty-invoices__text">
          Create an invoice by clicking the{' '}
          <span className="empty-invoices__text-bold">New invoice</span> by
          button and get started
        </p>
      </div>
    </div>
  );
};
