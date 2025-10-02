import React from "react";
import useInputField from "../../Hooks/UseInputField";

const HookForm = () => {
  const [name, nameOnChange] = useInputField("");
  const [email, emailOnChange] = useInputField("");
  const [password, passwordOnchange] = useInputField("");
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit", name, email, password);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" defaultValue={name} onChange={nameOnChange} />
        <br />
        <input
          type="email"
          onChange={emailOnChange}
          defaultValue={email}
          name=""
          id=""
        />
        <br />
        <input
          type="password"
          onChange={passwordOnchange}
          defaultValue={password}
          name=""
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default HookForm;
