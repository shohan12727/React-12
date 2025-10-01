import React from "react";
import { useLoaderData } from "react-router";

const UserDetails = () => {
  const user = useLoaderData();
  // console.log(user);
  const { name, email } = user;

  return (
    <div>
      <h3>User Details</h3>
      <div>
        <h2>Name: {name}</h2>
        <h2>Email: {email}</h2>
      </div>
    </div>
  );
};

export default UserDetails;
