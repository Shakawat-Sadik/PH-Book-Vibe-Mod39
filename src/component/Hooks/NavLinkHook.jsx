import { cn } from "@/lib/utils";
import React from "react";
import { NavLink, useLocation } from "react-router";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";

const NavLinkHook = ({ to, className, children, ...props }) => {
  const location = useLocation();
  
  // NavigationMenuLink renders an <a>, so don't wrap NavLink to avoid nested <a> tags
  // Instead, merge NavigationMenuLink's className into NavLink
  const navigationMenuLinkClass = "text-black dark:text-white data-[active]:text-primary focus:bg-accent hover:bg-accent data-[active]:bg-accent/50 hover:text-chart-3 dark:hover:text-chart-2 focus:text-chart-3 dark:focus:text-chart-2 focus-visible:ring-ring/50 flex flex-col gap-1 rounded-sm p-2 text-sm transition-all outline-none focus-visible:ring-[3px] focus-visible:outline-1";
  
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const isHashLink = to.startsWith("#");
        const isActuallyActive = isHashLink ? location.hash === to : isActive;
        return cn(navigationMenuLinkClass, isActuallyActive && "text-primary", className);
      }}
      {...props}
    >
      {children}
    </NavLink>
  );
};

export default NavLinkHook;
