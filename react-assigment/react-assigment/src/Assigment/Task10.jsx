import React from 'react'

function Task10() {
  {/*Create a React component that renders a list of items (e.g., a list of fruit names). Use the 
map() function to render each item in the list.  */}
    const fruit = ['Apple', 'Banana', 'Orange', 'Mango', 'Pineapple'];
  return (
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
     <table border={1}>
        <thead >
            <tr>
                <td>
                    id
                </td>
                <td>
                    fruit Name
                </td>
            </tr>
        </thead>
        <tbody>
           {
            fruit.map((index,item) =>(
                <tr key={item}>
                    <td>{item+1}</td>
                    <td>{index}</td>
                    
                </tr>

            ))
           }
        </tbody>
     </table>
    </div>
  )
}

export default Task10
