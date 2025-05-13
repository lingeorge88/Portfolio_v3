import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import avatarImg from '../assets/avatar.jpg';
import ThemeToggle from "./ThemeToggle";

function Navbar() {
  const location = useLocation();
  const isMainPage = location.pathname === '/';

  const NavLink = ({ to, children }) => {
    if (isMainPage) {
      return <a href={to}>{children}</a>;
    }
    return <Link to={`/${to}`}>{children}</Link>;
  };

  return (
    <div className="navbar bg-base-100 shadow-sm w-full">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
          </div>
          {/* Update mobile menu links */}
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
            <li><NavLink to="#about">About</NavLink></li>
            <li><NavLink to="#projects">Projects</NavLink></li>
            <li><NavLink to="#skills">Skills</NavLink></li>
            <li><NavLink to="#contact">Contact</NavLink></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><ThemeToggle /></li>
          </ul>
        </div>
        {/* Make the name link scroll to the top/hero */}
        <Link to="/" className="btn btn-ghost text-2xl text-primary">George Lin</Link>
      </div>
      <div className="navbar-end hidden lg:flex ml-6">
        <ul className="menu menu-horizontal px-1 text-base">
          <li><NavLink to="#about">About</NavLink></li>
          <li><NavLink to="#projects">Projects</NavLink></li>
          <li><NavLink to="#skills">Skills</NavLink></li>
          <li><NavLink to="#contact">Contact</NavLink></li>
          <li><Link to="/blog">Blog</Link></li>
        </ul>
        <div className="flex items-center mr-4">
          <ThemeToggle />
        </div>
        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img
              alt="profile image"
              src={avatarImg} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
