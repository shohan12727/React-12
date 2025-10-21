import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <fieldset className="fieldset">
            <h2 className="text-center text-2xl font-semibold">
              Register your account
            </h2>
            {/* name  */}
            <label className="label">Your Name</label>
            <input type="text" className="input" placeholder="Enter your name" />
            {/* photo url  */}
            <label className="label">Photo URL</label>
            <input type="text" className="input" placeholder="Photo URL" />
            {/* email  */}
            <label className="label">Email</label>
            <input type="email" className="input" placeholder="Email" />
            {/* password  */}
            <label className="label">Password</label>
            <input type="password" className="input" placeholder="Password" />
            {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
            <button className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="text-center font-semibold">
            Already Have An Account ?{" "}
            <Link to={`/auth/login`} className="text-secondary underlineF">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
