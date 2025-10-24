import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert('log out successfully')
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="flex justify-between items-center">
      <div className="for_layout"></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/career">Career</NavLink>
      </div>
      <div className="login_btn flex gap-2">
        <img className="w-12 rounded-full" src={`${user ? user.photoURL : userImg}`} alt="" />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Log out
          </button>
        ) : (
          <Link to="/auth/login" className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
