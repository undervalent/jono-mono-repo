import React from 'react';

import { Entry } from '@lib/schemas';
import { MobileItem } from './table-item.styles';

interface Props {
  data: Entry;
}

export const MobileTableItem: React.FC<Props> = ({ data }) => {
  const { name, quantity, price, total } = data;

  return (
    <MobileItem>
      <div className="mobile-item__title-wrapper">
        <h4>{name}</h4>
        <span className="mobile-item__quantity">
          {quantity} x {price}
        </span>
      </div>
      <div>
        <span className="mobile-item__total">{total}</span>
      </div>
    </MobileItem>
  );
};
