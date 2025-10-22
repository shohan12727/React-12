import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((res) => {
        const user = res.user;
        // console.log(user);
        setUser(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
      });
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleRegister}>
            <fieldset className="fieldset">
              <h2 className="text-center text-2xl font-semibold">
                Register your account
              </h2>
              {/* name  */}
              <label className="label">Your Name</label>
              <input
                name="name"
                type="text"
                className="input"
                placeholder="Enter your name"
                required
              />
              {/* photo url  */}
              <label className="label">Photo URL</label>
              <input
                name="photo"
                type="text"
                className="input"
                placeholder="Photo URL"
                required
              />
              {/* email  */}
              <label className="label">Email</label>
              <input
                name="email"
                type="email"
                className="input"
                placeholder="Email"
                required
              />
              {/* password  */}
              <label className="label">Password</label>
              <input
                name="password"
                type="password"
                className="input"
                placeholder="Password"
                required
              />
              {/* <div>
              <a className="link link-hover">Forgot password?</a>
            </div> */}
              <button type="submit" className="btn btn-neutral mt-4">
                Register
              </button>
            </fieldset>
          </form>
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
