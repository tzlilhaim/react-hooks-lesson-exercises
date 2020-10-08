import React, { useState, useEffect } from "react"
const axios = require("axios")

export default function Exercise2() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    async function fetchData() {
      let randomUsers = await axios.get("https://randomuser.me/api/?results=5")
      randomUsers = randomUsers.data.results.map((u) => {
        return {
          firstName: u.name.first,
          lastName: u.name.last,
          pic: u.picture.medium,
        }
      })
      setUsers(randomUsers)
    }
    fetchData()
  }, [])

  return (
    <div className="ex-space">
      <h4 className="ex-title">Exercise 2</h4>
      <div className="exercise" id="ex-2">
        {users.map((u, index) => {
          return (
            <div key={`user-${index}`}>
              <p>
                Name: {u.firstName} {u.lastName}
              </p>
              <img src={u.pic}></img>
            </div>
          )
        })}
      </div>
    </div>
  )
}
