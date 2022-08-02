import React from "react";
import { NavLink } from "react-router-dom";
// import { GiHamburgerMenu } from "react-icons/gi";
// import { AiOutlineClose } from "react-icons/ai";
import "./NavigationMenu.css";

export const NavigationMenu = () => {
 
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

  // useEffect(()=>{
  //   const btnNavEl = document.querySelector(".btn-mobile-nav");
  //   const headerEl = document.querySelector(".header");
  //   btnNavEl.addEventListener("click", function () {
  //     headerEl.classList.toggle("nav-open");
  //   });
  // }, [])

  let activeClassName =
    "font-semibold border border-b-2 border-b-violet400 text-violet400 text-xl p-4 activeClass";
  let linkClassName = "font-semibold text-lg md:text-xl p-4";
  return (
    <header className="header">
      <nav className="bg-violet200 px-10 main-nav" id="sticky">
        <ul className="main-nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? activeClassName : linkClassName
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                isActive ? activeClassName : linkClassName
              }
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink to="/experience">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : linkClassName}>
                  Experience
                </span>
              )}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {({ isActive }) => (
                <span className={isActive ? activeClassName : linkClassName}>
                  About
                </span>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* <div className="bg-violet200 pt-4">
        <button className="btn-mobile-nav p-4 ml-8">
          <GiHamburgerMenu
            className="icon-mobile-nav"
            name="menu-outline"
            size={20}
            onClick={openMenu}
          ></GiHamburgerMenu>

          <AiOutlineClose
            className="icon-mobile-nav"
            name="close-outline"
          ></AiOutlineClose>
        </button>
      </div> */}
    </header>
  );
};
