import { MobileTableItem } from '../mobile-table-item';
import { Entry as InvoiceItem } from '../../../../../../../../lib/schemas';

interface Props {
  items: InvoiceItem[];
}

export const MobileTable: React.FC<Props> = ({ items }) => {
  return (
    <>
      {items.map((el) => (
        <MobileTableItem key={el.name} data={el} />
      ))}
    </>
  );
};
