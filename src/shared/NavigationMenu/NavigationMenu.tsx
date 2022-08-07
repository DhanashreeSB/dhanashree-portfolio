import React from "react";
import { NavLink } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { useMobXStores } from "../../hooks/UseMobXStore";
import { NavigationStoreI } from "../../store/NavigationStore";
import { observer } from "mobx-react";
import { DropdownNavigationMenu } from "./DropdownNavigationMenu/DropdownNavigationMenu";
import './NavigationMenu.css'

type Props = {
  isSticky: boolean;
};

export const NavigationMenu = observer((props: Props) => {
  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected
  const { navigationState } = useMobXStores<{
    navigationState: NavigationStoreI;
  }>();
  // const [width, setWidth] = useState(window.innerWidth);

  // useEffect(()=>{
  //   const btnNavEl = document.querySelector(".btn-mobile-nav");
  //   const headerEl = document.querySelector(".header");
  //   btnNavEl.addEventListener("click", function () {
  //     headerEl.classList.toggle("nav-open");
  //   });
  // }, [])

  const openMenu = () => {
    navigationState.showNavigationMenu();
  };

  const closeMenu = () => {
    navigationState.hideNavigationMenu();
  };

  // const update = (): void => {
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener("resize", update);
  //   return (): void => {
  //     window.removeEventListener("resize", update);
  //   };
  // }, []);

  // useEffect(() => {
  //   if (window.innerWidth < 768) {
  //     document.querySelector("#sticky")!.classList.add("sticky-nav");
  //   }
  // });

  let activeClassName =
    "font-semibold border border-b-2 border-b-violet400 text-violet400 text-xl p-4 activeClass";
  let linkClassName = "font-semibold text-lg md:text-xl p-4";
  return (
    <header className="header">
      <nav
        className={`bg-violet200 px-10 main-nav hidden md:block ${
          props.isSticky === true ? "sticky-nav" : ""
        }`}
        id="sticky"
      >
        <ul className="flex gap-4 px-2 pt-6 pb-4">
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
      <div
        className={`bg-violet200 pt-4 md:hidden ${
          props.isSticky ? "sticky-nav" : ""
        }`}
        id="sticky"
      >
        {navigationState.displayNavigationMenu ? (
          <div className="fixed bg-white w-full p-4 left-0 top-0 h-screen">
            <div className="p-4">
              <AiOutlineClose
                className="icon-mobile-nav"
                name="close-outline"
                size={20}
                onClick={closeMenu}
              ></AiOutlineClose>
            </div>
            <button className="bg-white ">
              <DropdownNavigationMenu />
            </button>
          </div>
        ) : (
          <button className="p-4 ml-8">
            <GiHamburgerMenu
              className="icon-mobile-nav"
              name="menu-outline"
              size={20}
              onClick={openMenu}
            ></GiHamburgerMenu>
          </button>
        )}
      </div>
    </header>
  );
});
