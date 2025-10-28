import { use, useState } from "react";

const Users = ({ userPromise }) => {
  const initialUser = use(userPromise);
  const [user, setuser] = useState(initialUser);

  const handleAdduser = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    console.log(name, email);
    const newUser = { name, email };
    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...user, data];
        setuser(newUser);
      });
  };

  return (
    <div>
      <form onSubmit={handleAdduser}>
        <input name="name" type="text" placeholder="Enter your name" />
        <br />
        <input name="email" type="email" placeholder="Enter your email" />
        <br />
        <button>Add user</button>
      </form>

      {user.map((user) => (
        <p key={user.id}>
          {user.name} Email: {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;
