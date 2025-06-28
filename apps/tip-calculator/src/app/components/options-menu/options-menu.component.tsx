import React from 'react';
import './options-menu.css';
import Dollar from '../../../assets/dollar.svg';
import Person from '../../../assets/person.svg';
import { useSelector, useDispatch } from 'react-redux';
import { OptionsInput } from '../options-input';
import { TipMenu } from '../tip-menu';
import {
  getNumberOfPeople,
  getBillAmount,
  getTipPercentage,
  setNumberOfPeople,
  setBillAmount,
  setTipPercentage,
} from '../../../state/ui';

interface OptionsMenuState {
  numberOfPeople: number;
  totalBill: number;
  tipPercentage: number;
  error: string | null;
}
interface OptionsMenuActions {
  setNumberOfPeople: (value: number) => void;
  setTotalBill: (value: number) => void;
  setTipPercentage: (value: number) => void;
}

function useOptionsMenu(): [OptionsMenuState, OptionsMenuActions] {
  const dispatch = useDispatch();
  const numberOfPeople = useSelector(getNumberOfPeople);
  const totalBill = useSelector(getBillAmount);
  const tipPercentage = useSelector(getTipPercentage);
  return [
    {
      numberOfPeople: numberOfPeople || (0 as const),
      totalBill: totalBill || (0 as const),
      tipPercentage: tipPercentage || (0 as const),
      error: !numberOfPeople ? `Can't be zero` : null,
    },
    {
      setNumberOfPeople: (value: number) => dispatch(setNumberOfPeople(value)),
      setTotalBill: (value: number) => dispatch(setBillAmount(value)),
      setTipPercentage: (value: number) => dispatch(setTipPercentage(value)),
    },
  ];
}
/**
 * `OptionsMenu` is a component that displays the bill amount, tip percentage, and number of people.
 * @returns A section with a form that allows the user to input the bill and the number of people.
 */
export const OptionsMenu: React.FC = () => {
  const [
    { numberOfPeople, totalBill, error },
    { setNumberOfPeople, setTotalBill },
  ] = useOptionsMenu();

  return (
    <section className="tc-options-menu">
      <OptionsInput
        label="Bill"
        value={totalBill}
        onChange={setTotalBill}
        icon={
          <img className="options-menu__icon" src={Dollar} alt="dollar sign" />
        }
      />
      <TipMenu />
      <OptionsInput
        label="Number of people"
        value={numberOfPeople}
        onChange={setNumberOfPeople}
        icon={
          <img className="options-menu__icon" src={Person} alt="person icon" />
        }
        error={error}
      />
    </section>
  );
};
