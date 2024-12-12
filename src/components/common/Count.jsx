import React, { useState } from 'react'
import '../../assets/styles/count.scss'

export const Count = ({number}) => {
  const [voteCount, setVoteCount] = useState(number);
  const [status, setStatus] = useState("neutral")
  const upCount = () => {
    if(status === "neutral") {
      setVoteCount(voteCount + 1);
      setStatus("upvoted")
    } else if (status === "upvoted") {
      setVoteCount(voteCount -1);
      setStatus("neutral");
    } else {
      setVoteCount(voteCount + 2)
      setStatus("upvoted");
    }
  }

  const downCount = () => {
    if(status === "neutral") {
      setVoteCount(voteCount -1);
      setStatus("downvoted")
    } else if (status === "upvoted") {
      setVoteCount(voteCount -2);
      setStatus("downvoted")
    } else {
      setVoteCount(voteCount + 1)
      setStatus("neutral")
    }
  }

  return (    
    <div className="count flex">
        <button onClick={upCount} className={(status === "upvoted" ? "active" : "")}>+</button>    
        <p>{voteCount}</p>
        <button onClick={downCount} className={(status === "downvoted" ? "active" : "")}>-</button> 
    </div>
  )
}
