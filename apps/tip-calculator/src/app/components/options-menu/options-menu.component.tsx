import React from "react"
import { useRecoilState } from "recoil"
import "./options-menu.css"
import Dollar from '../../../assets/dollar.svg'
import Person from '../../../assets/person.svg'

import { OptionsInput } from "../options-input"
import { TipMenu } from "../tip-menu"
import {
  totalBill as totalBillState,
  numberOfPeople as numberOfPeopleState,
} from "../../lib/state"

/**
 * `OptionsMenu` is a component that displays the bill amount, tip percentage, and number of people.
 * @returns A section with a form that allows the user to input the bill and the number of people.
 */
export const OptionsMenu: React.FC = () => {
  const [numPeople, setNumPeople] = useRecoilState(numberOfPeopleState)
  const [totalBill, setTotalBill] = useRecoilState(totalBillState)

  const error = !numPeople ? `Can't be zero` : null;

  return (
    <section className="tc-options-menu">
      <OptionsInput label="Bill" value={totalBill} onChange={setTotalBill}
        icon={<img className="options-menu__icon" src={Dollar} alt="dollar sign" />}
      />
      <TipMenu />
      <OptionsInput
        label="Number of people"
        value={numPeople}
        onChange={setNumPeople}
        icon={<img className="options-menu__icon" src={Person} alt="person icon" />}
        error={error}
      />
    </section>
  )
}
