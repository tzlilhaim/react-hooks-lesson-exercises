import React, { useState } from "react"

export default function Exercise1() {
  const [inputs, setInputs] = useState({
    name: "",
    city: "",
    country: "",
  })

  const handleChange = (e) => {
    const name = e.target.id
    const value = e.target.value
    setInputs({ ...inputs, [name]: value })
  }

  const countries = ["united states", "china", "united kingdom", "australia"]
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 1</h4>
      <div className="exercise" id="ex-1">
        <input id="name" placeholder="name" onChange={handleChange}></input>
        <input id="city" placeholder="city" onChange={handleChange}></input>
        <select id="country" onChange={handleChange}>
          {countries.map((c, index) => {
            return (
              <option key={`option-${index}`} value={c}>
                {c}
              </option>
            )
          })}
        </select>
      </div>
    </div>
  )
}
