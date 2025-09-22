import React from 'react'

function Task6() {

  {/*Create a button in a React component that, when clicked, changes the text from "Not 
Clicked" to "Clicked!" using event handling. */}

   const handleClick = () => {
     alert('Button clicked!');
   }

  return (
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
      <button style={{ backgroundColor: 'blue', color: 'white' ,height:"40PX",border:"none"}} onClick={handleClick}>Click Me</button>
    </div>
  )
}

export default Task6
