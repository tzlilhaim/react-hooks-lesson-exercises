import React, { useState, useEffect } from "react"

export default function SpotCheck3() {
  const post = "I want cake"
  const [likes, setLikes] = useState(0)

  const likePost = () => setLikes(likes + 1)
  useEffect(() => {
    document.title = `you have ${likes} likes`
  })

  return (
    <div className="ex-space">
      <h4 className="ex-title">Spot Check 3</h4>
      <div className="exercise" id="sc-3">
        <div>{post}</div>
        <button onClick={likePost}>Like</button>
      </div>
    </div>
  )
}
