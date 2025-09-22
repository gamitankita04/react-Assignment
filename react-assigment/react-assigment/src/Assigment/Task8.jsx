import React from 'react'

function Task8({isLogging}) {

  return (
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
      {/* Create a component that conditionally displays a login or logout 
      button based on the user’s login status.*/}
      {
        isLogging ? <button style={{background:"red",height:"50px" ,width:"80px",textAlign:"center",padding:"20px",border:"none",color:"white",fontSize:"20px",borderRadius:"10px"}}>logout</button> : 
        <button style={{background:"green",height:"50px" ,width:"80px",textAlign:"center",padding:"20px",border:"none",color:"white",fontSize:"20px",borderRadius:"10px"}}>login</button>
      }
    </div>
  )
}

export default Task8
