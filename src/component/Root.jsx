import React, { useEffect, useState } from "react";
import { Link, NavLink, Outlet } from "react-router";
import HydrateFallbackElement from "./HydrateFallbackElement";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuPopup,
  NavigationMenuPositioner,
} from "@/components/ui/navigation-menu";
import HydrateFallbackElement2 from "./HydrateFallbackElement2";
import NavLinkHook from "./Hooks/NavLinkHook";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
//   const [isActive, setIsActive] = useState(false);
  const [isDark, setIsDark] = useState(() => {
    // Check device preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    console.log("🔄 Root component mounting - simulating data load...");

    // Simulate a 3-second loading delay so HydrateFallback is visible
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setIsDark(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    // Apply dark class to html element
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  if (isLoading) {
    return <HydrateFallbackElement2 className="flex flex-col h-screen justify-center items-center" />;
  }

  return (
    <div className="flex flex-col h-screen">
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <div className="flex items-center justify-between px-20 py-8">
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

          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <Button variant="ghost" asChild>
                  <NavLinkHook to="/">Home</NavLinkHook>
                </Button>
              </NavigationMenuItem>

              {/* Books with Submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>
                  <NavLinkHook to="/books" className={({isActive}) => isActive? "text-primary" : ""}>Listed Books</NavLinkHook>
                </NavigationMenuTrigger>
                <NavigationMenuPositioner>
                  <NavigationMenuPopup>
                    <NavigationMenuContent className="p-4 min-w-[20vw]">
                      <div className="flex flex-col gap-3">
                        <NavLinkHook to="#fiction" className="text-sm font-medium hover:text-primary transition-colors">
                          Fiction
                        </NavLinkHook>
                        <NavLinkHook to="#non-fiction" className="text-sm font-medium hover:text-primary transition-colors">
                          Non-Fiction
                        </NavLinkHook>
                        <NavLinkHook to="#mystery" className="text-sm font-medium hover:text-primary transition-colors">
                          Mystery
                        </NavLinkHook>
                        <NavLinkHook to="#romance" className="text-sm font-medium hover:text-primary transition-colors">
                          Romance
                        </NavLinkHook>
                        <NavLinkHook
                          to="#science-fiction"
                          className="text-sm font-medium hover:text-primary transition-colors"
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
                  <NavLinkHook to="/books">Authors</NavLink>
                </NavigationMenuTrigger>
                <NavigationMenuPositioner>
                  <NavigationMenuPopup>
                    <NavigationMenuContent className="p-4 min-w-[20vw]">
                      <div className="flex flex-col gap-3">
                        <NavLink to="#popular" className="text-sm font-medium hover:text-primary transition-colors">
                          Popular Authors
                        </NavLink>
                        <NavLink to="#featured" className="text-sm font-medium hover:text-primary transition-colors">
                          Featured
                        </NavLink>
                        <NavLink to="#new" className="text-sm font-medium hover:text-primary transition-colors">
                          New Authors
                        </NavLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuPopup>
                </NavigationMenuPositioner>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Button variant="ghost" asChild>
                  <NavLink to="/pages-to-read">Pages to Read</NavLink>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <NavigationMenu className="relative">
            <NavigationMenuList className="space-x-7">
              <NavigationMenuList className="space-x-1">
                <NavigationMenuItem>
                  <Button className="cursor-pointer hover:opacity-80 hover:translate-y-0.5">Log In</Button>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Button className="cursor-pointer hover:opacity-80 hover:translate-y-0.5">Sign Up</Button>
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
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        <h1 className="text-3xl font-bold px-6 py-6">Book Vibe</h1>
        <div className="flex min-h-0 flex-1 px-6">
          <Outlet />
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-background p-6 text-center text-sm text-muted-foreground">
        <p>&copy; 2023 Book Vibe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Root;
