import { cn } from "@/lib/utils";
import React from "react";
import { NavLink } from "react-router";

const NavLinkHook = ({ to, className, children, ...props }) => {
  return (
    <NavLink to={to} className={cn(`({isActive}) => isActive ? "text-center" : ""`, className)} {...props}>
      {children}
    </NavLink>
  );
};

export default NavLinkHook;
