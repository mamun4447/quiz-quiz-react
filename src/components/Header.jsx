import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="shadow-lg py-2">
      <div className="navbar bg-base-100 container mx-auto">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            Quiz-Quiz
          </a>
        </div>
        {/* Phone  */}
        <div className="navbar-end">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/home">Home</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/statistics">Statistics</Link>
              </li>
              <li>
                <Link to="/blogs">Blogs</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
