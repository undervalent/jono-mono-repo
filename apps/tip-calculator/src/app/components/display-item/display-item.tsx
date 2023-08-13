import React from "react"
import "./display-item.css"

interface Props {
  value: string | number
  header: string
  subHeader?: string
}

/**
 * This function renders a single display item.
 * @param  - the value of the input
 * @returns A React component.
 */
export const DisplayItem: React.FC<Props> = ({ value, header, subHeader }) => {
  const sub = subHeader ? subHeader : "/ person"
  return (
    <div className="tip-calc__display-item">
      <div className="tip-calc__text">
        <span className="tip-calc__text-header">{header}</span>
        <span className="tip-calc__text-subheader">{sub}</span>
      </div>
      <div className="tip-calc__display-value">${value}</div>
    </div>
  )
}

export default DisplayItem
