import React, { useState } from 'react'

function Task9() {

  // Implement a component that displays a message like "You are eligible to vote" if the user 
  //is over 18, otherwise display "You are not eligible to vote." 
    const[age,setAge] = useState()
    

   const handleChange = (e)=>{
    setAge(e.target.value)
   }

    let msg=""
   if(age >= 18){
     msg =<h1 style={{color:"green"}}> you are eligibal for voting</h1>
   }
   else{
    msg=<h1 style={{color:"red"}}>you are not eligibal fot voting</h1>
   }

  return (
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
       <div>
        <form>
            <input type="number" name="age" id="" onChange={handleChange} />
        </form>
      </div>
        <br/><br></br>
      <p>{msg}</p>
    </div>
  )
}

export default Task9
