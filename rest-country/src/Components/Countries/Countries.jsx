import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("Clicked", country);
  };

  const countriesData = use(countriesPromise);
  const mainElements = countriesData.countries;

  return (
    <div>
      <h1>In the country</h1>
      <h3>Total Country Visited: </h3>
      <h3>All Country: {mainElements.length}</h3>
      <div className="countries">
        {mainElements.map((country) => (
          <Country
            key={country?.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
