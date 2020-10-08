import React, { useState } from "react"

export default function SpotCheck1() {
  const [counter, setCounter] = useState(1)

  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 1</h4>
      <div className="exercise" id="sc-1">
        <button id="decrease-counter" onClick={decreaseByOne}>
          -
        </button>{" "}
        <span id="counter">{counter}</span>{" "}
        <button id="increase-counter" onClick={increaseByOne}>
          +
        </button>
      </div>
    </div>
  )
}
