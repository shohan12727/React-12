import React, { useState } from "react";
import { auth } from "../Firebase/Firebase.config";
import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { IoEyeOffSharp } from "react-icons/io5";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router";
const Register = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const temrs = e.target.terms.checked;
    console.log(email, password, temrs);

    // const passwordPatern = /^.{7}$ /;

    // if(!passwordPatern.test(password)){
    //   setError('password must be in 7 hcaracter')
    //   return;
    // }

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).{6,}$/;

    if (!passwordPattern.test(password)) {
      setError(
        "Password must be at least 6 characters long, contain one uppercase letter, one lowercase letter, and one special character."
      );
      return;
    }
    if (!temrs) {
      setError("Please accept our terms and condition");
      return;
    }

    // reset
    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
        setSuccess(true);
        e.target.reset();


        sendEmailVerification(result.user)
        .then(() => {
          alert('Please login to your email varify your email address')
        })



      })
      .catch((err) => {
        console.log(err);
        setError(err.message);
      });
  };

  const handleTogglePasswordShow = (e) => {
    e.preventDefault();
    setShowPassword(!showPassword);
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <h1 className="text-5xl font-bold">Regster now!</h1>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    className="input"
                    placeholder="Password"
                  />
                  <button
                    onClick={handleTogglePasswordShow}
                    className="btn btn-sm absolute top-1 right-5"
                  >
                    {showPassword ? <IoEyeOffSharp /> : <FaEye />}
                  </button>
                </div>

                <label className="label">
                  <input name="terms" type="checkbox" className="checkbox" />
                  Accept all term and conditon
                </label>
              </fieldset>
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Register</button>

              {error && <p className="text-sm text-rose-600">{error}</p>}
              {success && (
                <p className="text-sm text-green-500">
                  Registration successfully done
                </p>
              )}
            </form>
            <p>
              Already have an account?{" "}
              <Link className="underline text-blue-600" to="/login">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
