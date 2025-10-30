import React, { use, useState } from "react";
import { Link } from "react-router";
const userPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);
const Users = () => {
  const initialUsers = use(userPromise);
  const [users, setUsers] = useState(initialUsers);

  const handleAddUser = (e) => {
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

  const handleDeleteUser = (id) => {
    console.log("deleted", id);
    fetch(`http://localhost:3000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("after delte", data);
        if (data.deletedCount) {
          alert("Delete successfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h3>Total User {users.length}</h3>
      <form onSubmit={handleAddUser}>
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
          <div key={user._id}>
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
              <button onClick={() => handleDeleteUser(user._id)}>X</button>
              <Link to={`/users/${user._id}`}>Details</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
