import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-main text-white h-[40px]">
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/rental">Rental</NavLink>
              </li>
              <li>
                <NavLink to="/vlogs">Vlogs</NavLink>
              </li>
              <li>
                <NavLink to="/bookings">Bookings</NavLink>
              </li>
              <li>
                <NavLink to="/post">Post</NavLink>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-4">
            <li className="font-semibold text-lg border-b">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="font-semibold text-lg border-b">
              <NavLink to="/rental">Rental</NavLink>
            </li>
            <li className="font-semibold text-lg border-b">
              <NavLink to="/vlogs">Vlogs</NavLink>
            </li>
            <li className="font-semibold text-lg border-b">
              <NavLink to="/bookings">Bookings</NavLink>
            </li>
            <li className="font-semibold text-lg border-b">
              <NavLink to="/post">Post</NavLink>
            </li>
          </ul>
        </div>
        {user?.email ? (
          <div className="navbar-end gap-2">
            <p className="text-sm border rounded-full px-1 text-gray-300">
              {user?.email}
            </p>
            <div class="group relative inline-block overflow-hidden border  border-red-800 px-8 py-1 focus:outline-none focus:ring">
              <span class="absolute inset-y-0 left-0 w-[2px] bg-red-800 transition-all group-hover:w-full group-active:bg-indigo-500"></span>

              <button
                onClick={logOut}
                class="relative text-sm font-medium text-red-800 transition-colors group-hover:text-main"
              >
                Logout
              </button>
            </div>
          </div>
        ) : (
          <div className="navbar-end gap-1">
            <Link
              to="/login"
              class="group relative inline-block overflow-hidden border border-primary px-8 py-1 focus:outline-none focus:ring"
            >
              <span class="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500"></span>

              <button class="relative text-sm font-medium text-primary transition-colors group-hover:text-main">
                Login
              </button>
            </Link>
            <Link
              to="/register"
              class="group relative inline-block overflow-hidden border border-primary px-8 py-1 focus:outline-none focus:ring"
            >
              <span class="absolute inset-y-0 left-0 w-[2px] bg-primary transition-all group-hover:w-full group-active:bg-indigo-500"></span>

              <button class="relative text-sm font-medium text-primary transition-colors group-hover:text-main">
                Register
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
