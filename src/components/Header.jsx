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
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
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
  );
};

export default Header;
