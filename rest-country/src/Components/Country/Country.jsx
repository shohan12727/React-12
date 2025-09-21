import React, { useState } from "react";
import "./Country.css";

const Country = ({
  country,
  handleVisitedCountries,
  handleCountryFlag,
  handleCountryArea,
}) => {
  // console.log(country.area.area);

  // console.log(handleVisitedCountries);

  const [visit, setVisit] = useState(false);
  const handleVisitedBtn = () => {
    setVisit(!visit);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visit && "country-visited"}`}>
      <img src={country.flags.flags?.png} alt={country.flags.flags?.alt} />
      <h2>Name: {country.name.common}</h2>
      <h2>Population: {country.population.population}</h2>
      <p>
        Area: {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisitedBtn}>
        {visit ? "Visited" : "Not Visited"}
      </button>
      <button onClick={() => handleCountryFlag(country.flags.flags?.png)}>
        Add Flag
      </button>
      <br />
      <button onClick={() => handleCountryArea(country.area.area)}>
        Add Area
      </button>
    </div>
  );
};

export default Country;
