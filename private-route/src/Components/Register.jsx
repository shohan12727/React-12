import { Link } from "react-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase/firebase.config";


const Register = () => {


  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    console.log(name, email, password);

    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res.user);
      })
      .then((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card bg-base-100 w-full mx-auto max-w-sm shrink-0 shadow-2xl my-10">
        <div className="card-body">
          <h1 className="text-5xl font-bold">Please Login in now!</h1>
          <form onSubmit={handleSubmit}>
            <fieldset className="fieldset">
              {/* name field  */}
              <label className="label">Name</label>
              <input
                type="text"
                className="input"
                name="name"
                placeholder="Name"
              />
              {/* email field  */}
              <label className="label">Email</label>
              <input
                type="email"
                className="input"
                name="email"
                placeholder="Email"
              />
              {/* password field  */}
              <label className="label">Password</label>
              <input
                type="password"
                className="input"
                name="password"
                placeholder="Password"
              />
              <div>
                <a className="link link-hover">Forgot password?</a>
              </div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
          </form>
          <p>
            Already have an account?{" "}
            <Link
              className="underline text-blue-500 hober:text-blue-800"
              to="/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
