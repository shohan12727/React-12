import React, { use } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
  const countriesData = use(countriesPromise);
  const mainElements = countriesData.countries;

  return (
    <div>
      <h1>In the country</h1>
      <h3>All Country: {mainElements.length}</h3>
      <div className="countries">
        {mainElements.map((country) => (
         
          <Country  key={country?.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
