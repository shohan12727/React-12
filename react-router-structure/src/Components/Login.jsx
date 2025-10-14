import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router";
import { auth } from "../Firebase/Firebase.config";
import { useRef, useState } from "react";

const Login = () => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    setError("");

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
        if (!res.user.emailVerified) {
          alert("please varify your email address");
        }
      })
      .catch((err) => {
        console.log(err.message);
        setError(err.message);
      });
  };

  const handleForgetPassword = () => {
    const email = emailRef.current.value ;
    // const email = e.target.email.value;
    console.log(email);
    sendPasswordResetEmail(auth, email)
    .then(() => {
      alert('please check your email')
    })
    .catch(err => {
      console.log(err)
    })
  };

  return (
    <>
      <h1 className="text-5xl text-center font-bold my-3">Login now!</h1>
      <div className="card bg-base-100 w-full mx-auto my-5 max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input
                ref={emailRef}
                name="email"
                type="email"
                className="input"
                placeholder="Email"
              />
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
              />
              <div onClick={handleForgetPassword}>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <p>
            New to our websile? please{" "}
            <Link className="underline text-blue-600" to="/register">
              Register
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
