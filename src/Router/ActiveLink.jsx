import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
    return (
        <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? "active bg-white text-black"
            : ""
        }
      >
        {children}
        {/* other code */}
      </NavLink>
    );
};

export default ActiveLink;