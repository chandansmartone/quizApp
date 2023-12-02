import React from 'react'
import "./Start.css"
const Start = ({handlestart}) => {
    console.log(handlestart);
  return (
    <div>
      
      <h1>Basic ReactJS quiz</h1>
      <button onClick={()=>handlestart(true)}>Start Test</button>
      
    </div>
  )
}

export default Start
