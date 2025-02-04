import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuLeft } from "react-icons/cg";

const logo = "/assets/shared/logo.svg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="header flex items-center justify-between w-full lg:flex-row p-5">
        <div>
          <Link to="/">
            <img src={logo} alt="" title="" />
          </Link>
        </div>

        {/* Navbar with Slide-in Effect */}
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/destination" onClick={() => setIsOpen(false)}>Destination</Link>
            </li>
            <li>
              <Link to="/crew" onClick={() => setIsOpen(false)}>Crew</Link>
            </li>
            <li>
              <Link to="/technology" onClick={() => setIsOpen(false)}>Technology</Link>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <button onClick={handleClick}>
            <CgMenuLeft className="text-white text-4xl" />
          </button>
        </div>
      </header>
    </>
  );
};

export default Header;
