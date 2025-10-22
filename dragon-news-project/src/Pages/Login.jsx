import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {

 const {logIn} = use(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    logIn(email, password)
     .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode, errorMessage)
  });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <h2 className="text-center text-2xl font-semibold">
              Login your account
            </h2>
            {/* email  */}
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input"
              placeholder="Email"
            />
            {/* password  */}
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input"
              placeholder="Password"
            />
            {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>
          </fieldset>
          <p className="text-center font-semibold">
            Dont’t Have An Account ?{" "}
            <Link to={`/auth/register`} className="text-secondary underlineF">
              Register
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
