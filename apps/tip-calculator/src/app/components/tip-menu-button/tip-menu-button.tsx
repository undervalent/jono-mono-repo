import React from "react"

import "./tip-menu-button.css"

interface Props {
  value: number
  clickHandler: (val: number) => void
}

export const TipMenuButton: React.FC<Props> = ({ value, clickHandler }) => {
  const handleClick = () => clickHandler(value)
  return (
    <button className="tip-menu-button" onClick={handleClick}>
      {value}%
    </button>
  )
}
