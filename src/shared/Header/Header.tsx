import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {

  // This styling will be applied to a <NavLink> when the
  // route that it links to is currently selected.

  let activeClassName = "font-semibold underline text-purple400";
  let linkClassName = 'font-semibold';
  return (
    <nav className='bg-purple200'>
      <ul className='flex gap-4 p-4'>
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
            to="projects"
            className={({ isActive }) =>
              isActive ? activeClassName : linkClassName
            }
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink to="experience">
            {({ isActive }) => (
              <span
                className={
                  isActive ? activeClassName : linkClassName
                }
              >
                Experience
              </span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}
