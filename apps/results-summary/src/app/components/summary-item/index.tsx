import './styles.css'
import React from 'react';
interface SummaryItemProps {
  title?: string;
  icon?: any;
  value?: string | number;
  index: number;
}
export const SummaryItem = ({title, icon, value, index}:SummaryItemProps) => {
  return (
    <article className={`summary-item summary-item__${index}`}>
      <header className="summary-item__header">
        <img src={icon} alt={`${title} icon`} />
        <h3 className="summary-item__headline">{title}</h3>
      </header>
      <p className="summary-item__text">{value}<span className='summary-item__total'>&nbsp;&nbsp;/ 100</span></p>
    </article>
  )
}

export default SummaryItem
