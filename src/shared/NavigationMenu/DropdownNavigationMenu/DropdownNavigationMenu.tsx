import { observer } from "mobx-react";
import React from "react";
import { NavLink } from "react-router-dom";
import { useMobXStores } from "../../../hooks/UseMobXStore";
import { NavigationStoreI } from "../../../store/NavigationStore";

export const DropdownNavigationMenu = observer(() => {
  const { navigationState } = useMobXStores<{
    navigationState: NavigationStoreI;
  }>();
  let activeClassName =
    "font-bold rounded-lg text-black text-xl activeClass my-4";
  let linkClassName = "font-semibold text-lg md:text-xl my-4";

  const handleNavClick = () => {
    navigationState.hideNavigationMenu();
  };

  return (
    <nav className="bg-white opacity-60 text-left w-full pl-4 h-screen">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? activeClassName : linkClassName
            }
            onClick={handleNavClick}
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
            onClick={handleNavClick}
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="/experience" onClick={handleNavClick}>
            {({ isActive }) => (
              <span className={isActive ? activeClassName : linkClassName}>
                Experience
              </span>
            )}
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={handleNavClick}>
            {({ isActive }) => (
              <span className={isActive ? activeClassName : linkClassName}>
                About
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
});
