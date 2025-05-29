import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './tip-calc-display.css';
import { DisplayItem } from '../display-item';
import { getTotals, resetTotals } from '../../../state/ui';

/**
 * This function is responsible for displaying the tip amount and total amount. It also has a reset
button that resets the tip amount and total amount.
 * @returns A React component that renders the tip amount and total amount.
 */
export const TipCalcDisplay: React.FC = () => {
  const dispatch = useDispatch();
  const { tipPerPerson, totalPerPerson } = useSelector(getTotals);
  const isDisabled = !totalPerPerson || tipPerPerson === '0.00';

  const handleReset = () => {
    dispatch(resetTotals());
  };

  return (
    <section className="tip-calc__display">
      <DisplayItem header="Tip Amount" value={tipPerPerson} />
      <DisplayItem header="Total" value={totalPerPerson} />

      <button
        className={`tip-calc__reset-btn ${isDisabled ? 'tip-calc__reset-btn-disabled' : ''}`}
        type="button"
        onClick={handleReset}
        disabled={isDisabled}
      >
        RESET
      </button>
    </section>
  );
};
