import { NavLink } from "react-router";
import user from '../assets/user.png'
const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="for_layout"></div>
      <div className="nav flex gap-5 text-accent">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">About</NavLink>
        <NavLink to="/">Career</NavLink>
      </div>
      <div className="login_btn flex gap-2">
        <img src={user} alt="" />
        <div className="btn btn-primary px-10">Login</div>
      </div>
    </div>
  );
};

export default Navbar;
