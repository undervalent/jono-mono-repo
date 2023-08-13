import React from "react"
import { useRecoilValue, useResetRecoilState } from "recoil"
import "./tip-calc-display.css"
import {
  tipTotals,
  totalBill,
  numberOfPeople,
  tipPercentage,
} from "../../lib/state"
import { DisplayItem } from "../display-item"

/**
 * This function is responsible for displaying the tip amount and total amount. It also has a reset
button that resets the tip amount and total amount.
 * @returns A React component that renders the tip amount and total amount.
 */
export const TipCalcDisplay: React.FC = () => {
  const { tipPerPerson, totalPerPerson } = useRecoilValue(tipTotals)
  const resetPeople = useResetRecoilState(numberOfPeople)
  const resetTotal = useResetRecoilState(totalBill)
  const resetTipAmount = useResetRecoilState(tipPercentage)
  const isDisabled = !totalPerPerson || tipPerPerson === '0.00';

  const handleReset = () => {
    resetPeople()
    resetTotal()
    resetTipAmount()
  }

  return (
    <section className="tip-calc__display">
      <DisplayItem header="Tip Amount" value={tipPerPerson} />
      <DisplayItem header="Total" value={totalPerPerson} />

      <button className={`tip-calc__reset-btn ${isDisabled ? 'tip-calc__reset-btn-disabled':''}`}
        type="button" onClick={handleReset} disabled={isDisabled}>
        RESET
      </button>
    </section>
  )
}
