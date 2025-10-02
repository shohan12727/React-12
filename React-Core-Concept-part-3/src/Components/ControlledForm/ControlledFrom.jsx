import React, { useState } from "react";

const ControlledFrom = () => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");
    
    // Check the password state variable, not e.target.value
    if (password.length < 6) {
      setError("Password must be 6 letters or more");
    } else {
      setError("");
      // Here you can handle the successful form submission
      console.log("Form is valid, submitting...");
    }
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" required />
        <br />
        <input
          type="password"
          name="password"
          value={password}  // Changed from defaultValue to value for controlled component
          onChange={handlePasswordOnChange}
          required
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ControlledFrom;