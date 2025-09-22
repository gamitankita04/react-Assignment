import React, { useState } from 'react'

function Counter() {
  //counter app
  const[count,setCount]=useState(0);
  const[text1,setText1]=useState(0)

  const increse =()=>{
      setCount(count +1)
  }

  const descrese =()=>{
      setCount(count -1)
  }

  const handletext=(e)=>{
    setText1(e.target.value)
  }
  

  const handleClick=()=>{
     alert(text1)
  }
  return (
    <div  style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      margin: '20px auto',
      textAlign: 'left'
    }}>
       <fieldset>
        <legend>Counter App</legend>
        <button onClick={descrese}>-</button>
        <span>{count}</span>
        <button onClick={increse}>+</button>
       </fieldset>
    </div>
  )
}

export default Counter
