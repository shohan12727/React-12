import React, { use } from "react";

const Users = ({ userPromise }) => {
  const userData = use(userPromise);

  return (
    <div>
      <form>
        <input type="text" placeholder="Enter your name" />
        <br />
        <input type="email" placeholder="Enter your email" />
        <br />
        <button>Add user</button>
      </form>

      {userData.map((user) => (
        <p key={user.id}>
          {user.name} Email: {user.email}
        </p>
      ))}
    </div>
  );
};

export default Users;
