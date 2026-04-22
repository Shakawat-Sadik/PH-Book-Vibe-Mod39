import React from 'react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuPopup,
  NavigationMenuPositioner,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import NavLinkHook from "../Hooks/NavLinkHook";
import { Link, NavLink} from "react-router";
import { Button } from "@/components/ui/button";

const MenuItems = () => {
  return
}

const NavMenu = ({isDark, setIsDark}) => {
    return (
        <div className="flex items-center justify-between px-8 md:px-16 lg:px-32 py-4 md:py-8">
          {/* Navigation Menu */}

          

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link to="#">
                  <span className="text-3xl font-bold">Book Vibe</span>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                  <NavLinkHook to="/">Home</NavLinkHook>
              </NavigationMenuItem>

              {/* Books with Submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <NavLinkHook to="/books">
                    Listed Books
                  </NavLinkHook>
                </NavigationMenuTrigger>
                <NavigationMenuPositioner>
                  <NavigationMenuPopup>
                    <NavigationMenuContent className="p-4 min-w-[20vw]">
                      <div className="flex flex-col gap-3">
                      
                        <NavLinkHook to="#fiction">
                          Fiction
                        </NavLinkHook>
                        <NavLinkHook
                          to="#non-fiction"
                         
                        >
                          Non-Fiction
                        </NavLinkHook>
                        <NavLinkHook to="#mystery">
                          Mystery
                        </NavLinkHook>
                        <NavLinkHook to="#romance">
                          Romance
                        </NavLinkHook>
                        <NavLinkHook
                          to="#science-fiction"
                        >
                          Science Fiction
                        </NavLinkHook>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuPopup>
                </NavigationMenuPositioner>
              </NavigationMenuItem>

              {/* Authors with Submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <NavLinkHook to="/Authors">Authors</NavLinkHook>
                </NavigationMenuTrigger>
                <NavigationMenuPositioner>
                  <NavigationMenuPopup>
                    <NavigationMenuContent className="p-4 min-w-[20vw]">
                      <div className="flex flex-col gap-3">
                        <NavLinkHook to="#popular">
                          Popular Authors
                        </NavLinkHook>
                        <NavLinkHook to="#featured">
                          Featured
                        </NavLinkHook>
                        <NavLinkHook to="#new">
                          New Authors
                        </NavLinkHook>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuPopup>
                </NavigationMenuPositioner>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                  <NavLinkHook to="/pages-to-read">Pages to Read</NavLinkHook>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="relative">
            <NavigationMenuList className="space-x-7">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Button className="">Log In</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="cursor-pointer hover:-translate-y-px">Sign Up</Button>
                </NavigationMenuItem>
              </NavigationMenuList>
              <NavigationMenuItem>
                <Button
                  onClick={() => setIsDark(!isDark)}
                  variant="outline"
                  size="icon"
                  className="cursor-pointer bg-[rgba(231,214,139,0.5)] border-0 dark:bg-[rgba(237,237,239,0.5)] shadow-(--theme-shadow) rounded-full"
                >
                  {isDark ? "🌙" : "☀️"}
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          {/* Theme Toggle Button */}
        </div>
    );
};

export default NavMenu;