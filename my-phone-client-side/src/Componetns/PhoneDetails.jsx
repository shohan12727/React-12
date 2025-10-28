import React from "react";
import { useLoaderData } from "react-router";

const PhoneDetails = () => {
  const phone = useLoaderData();

  return (
    <div>
      <h2>This is phone details</h2>
      <h1>{phone.name}</h1>
      <img src={phone.image} alt="" />
    </div>
  );
};

export default PhoneDetails;
