import React, { use, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    // console.log("Clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    // console.log(newVisitedCountries);

    setVisitedCountries(newVisitedCountries);
  };

  const [addFlags, setAddFlags] = useState([]);

  const handleCountryFlag = (flags) => {
    //  console.log("Flag added", flags);
    const newAddFlags = [...addFlags, flags];
    setAddFlags(newAddFlags);
  };

  const [addArea, setAddArea] = useState([]);

  const handleCountryArea = (area) => {
    console.log("area added", area);
    const newAddArea = [...addArea, area];
    setAddArea(newAddArea);
    
  }




  const countriesData = use(countriesPromise);
  const mainElements = countriesData.countries;

  return (
    <>
      <div>
        <h1>In the country</h1>
        <h3>Total Country Visited: {visitedCountries.length}</h3>
       <ul>
        {
          addArea.map(area => (
            <li>Selected Country Area: <b>{area}</b></li>
        ))
        }
        </ul>

        <div className="add-flags">
          {addFlags.map((flag) => (
            <img className="add-flag" src={flag}></img>
          ))}
        </div>

        <ol>
          {visitedCountries.map((country) => (
            <li key={country?.ccn3.ccn3}>{country.name.common}</li>
          ))}
        </ol>
        <h3>All Country: {mainElements.length}</h3>
        <div className="countries">
          {mainElements.map((country) => (
            <Country
              key={country?.ccn3.ccn3}
              country={country}
              handleCountryArea = {handleCountryArea}
              handleVisitedCountries={handleVisitedCountries}
              handleCountryFlag={handleCountryFlag}
            ></Country>
          ))}
        </div>
      </div>
    </>
  );
};

export default Countries;
