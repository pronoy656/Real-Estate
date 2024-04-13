import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/Authprovider";

const Navbar = () => {
  const { user, userLogout } = useContext(AuthContext);

  const handleSignOut = () => {
    userLogout().then().catch();
  };

  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>
          <a>Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to={"/about"}>
          <a>About</a>
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to={"/"}>
          <div className="flex items-center btn">
            <img
              className="w-[50px] h-[40px] rounded-full"
              src="https://i.ibb.co/pn2Vnq6/hotellogo.webp"
              alt=""
            />
            <p className="text-2xl font-semibold">
              Hotel <span>Rio</span>
            </p>
          </div>
        </Link>
        {/* <a className="btn btn-ghost text-xl text-[#BEAD8E]">daisyUI</a> */}
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLink}</ul>
      </div>
      {/* Login and log out button with conditional */}
      {user ? (
        <div className="navbar-end">
          <a onClick={handleSignOut} className="btn btn-secondary">
            Log Out
          </a>
        </div>
      ) : (
        <div className="navbar-end">
          <Link to={"/login"}>
            <a className="btn btn-secondary">Log in</a>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
