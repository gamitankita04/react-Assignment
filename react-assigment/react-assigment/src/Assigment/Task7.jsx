import React, { useState } from 'react'

function Task7() {
  const [text,setText] = useState("")

  const handleChange=(e)=>{
     setText(e.target.value)
  }

  return (
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
      {/*Create a form with an input field in React. Display the value of the input field 
      dynamically as the user types in it. */}
      <h1>Task 7</h1>
      <form>
        <input type="text" name="" id="" onChange={handleChange} />
        <p>{text}</p>
      </form>
    </div>
  )
}

export default Task7
