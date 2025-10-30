import React, { use, useState } from "react";
import { Link } from "react-router";
const userPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);
const Users = () => {
  const initialUsers = use(userPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const newUser = { email, password };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          newUser._id = data.insertedId;
          const newUsers = [...users, newUser];
          setUsers(newUsers);
          alert("data added successfully");
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Enter your email" />
        <br />
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <br />
      <Link to="/">Back</Link>
      <p>-------------------------</p>
      <div>
        {users.map((user) => (
          <>
            <div
              style={{
                border: "2px solid green",
                padding: "10px",
                borderRadius: "5px",
                margin: "5px",
              }}
            >
              <p>Email: {user.email} </p>
              <p>Password: {user.password}</p>
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default Users;
