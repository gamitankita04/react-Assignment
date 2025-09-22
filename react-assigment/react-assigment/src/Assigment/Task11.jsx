import React from "react";

function Task11() {

    //Create a list of users where each user has a unique id. Render the user list using React 
    //and assign a unique key to each user.
  const users = [
    { id: 1, name: "Alice", age: 22 },
    { id: 2, name: "Bob", age: 25 },
    { id: 3, name: "Charlie", age: 28 },
    { id: 4, name: "David", age: 30 },
  ];

  return (
    <div style={{alignItems:"center",display:"flex",justifyContent:"center"}}>
      <h2>User List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.name} (Age: {user.age})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task11;
