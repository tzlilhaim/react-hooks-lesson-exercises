import React, { useState, useEffect } from "react"
import { fetchExpenses } from "../data/utils"

export default function Exercise3() {
  const [month, setMonth] = useState(0)
  const [expenses, setExpenses] = useState([])

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]
  const handleSelect = (e) => {
    const i = months.indexOf(e.target.value)
    setMonth(i)
  }

  useEffect(() => {
    async function fetchData() {
      const expenses = await fetchExpenses(month)
      setExpenses(expenses)
    }
    fetchData()
  }, [month])
  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 3</h4>
      <div className="exercise" id="ex-3">
        {
          <select onChange={handleSelect}>
            {months.map((m, index) => {
              return (
                <option key={`m-${index}`} value={m}>
                  {m}
                </option>
              )
            })}
          </select>
        }
        <table>
          <tbody>
            <tr>
              <th>Amount</th>
              <th>Date</th>
              <th>Item</th>
            </tr>
            {expenses.map((e, index) => {
              return (
                <tr key={`e-${index}`}>
                  <td>{e.amount}</td>
                  <td>{e.date}</td>
                  <td>{e.item}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
