import React from "react";
import { Link, useLoaderData } from "react-router";

const Phone = () => {
  const phonedata = useLoaderData();
  return (
    <div>
      <h2>All phones:{phonedata.length}</h2>
      {phonedata.map((p) => (
        <li key={p.id}>
          <Link to={`/phone/${p.id}`}>{p.name}</Link>
        </li>
      ))}
    </div>
  );
};

export default Phone;
