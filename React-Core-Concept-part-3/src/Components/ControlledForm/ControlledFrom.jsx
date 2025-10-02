import React, { useState } from "react";

const ControlledFrom = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, password);

    // Check the password state variable, not e.target.value
    if (password.length < 6) {
      setError("Password must be 6 letters or more");
    } else {
      setError("");
      // Here you can handle the successful form submission
    }
  };
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChnage = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordOnChange = (e) => {
    console.log(e.target.value);
    setPassword(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          defaultValue={name}
          placeholder="enter your name"
          onChange={handleNameChange}
          type="text"
        />
        <br />
        <input
          onChange={handleEmailChnage}
          defaultValue={email}
          type="email"
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          placeholder="enter your password"
          type="password"
          name="password"
          value={password} // Changed from defaultValue to value for controlled component
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
