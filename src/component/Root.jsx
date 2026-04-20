import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router";
import HydrateFallbackElement from "./HydrateFallbackElement";
import { Button } from "@/components/ui/button";
import { 
  NavigationMenu, 
  NavigationMenuList, 
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuPopup,
  NavigationMenuPositioner 
} from "@/components/ui/navigation-menu";
import HydrateFallbackElement2 from "./HydrateFallbackElement2";

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(() => {
    // Check device preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    console.log("🔄 Root component mounting - simulating data load...");

    // Simulate a 3-second loading delay so HydrateFallback is visible
    const timer = setTimeout(() => {
      console.log("✅ Root component loaded - HydrateFallback should disappear now");
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Listen to system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    const handleChange = (e) => {
      setIsDark(e.matches);
      console.log("🎨 System theme changed to:", e.matches ? "dark" : "light");
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
    <div className="flex flex-col h-screen w-full">
      {/* Header with Theme Toggle */}
      <header className=" border-b border-border bg-background sticky top-0 z-40">
        <div className="flex items-center justify-between px-6 py-4">
          {/* Navigation Menu */}
          <NavigationMenu>
            <NavigationMenuList>
              {/* Home */}
              <NavigationMenuItem>
                <Button variant="ghost" asChild>
                  <NavLink to="/">Home</NavLink>
                </Button>
              </NavigationMenuItem>

              {/* Books with Submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Books</NavigationMenuTrigger>
                <NavigationMenuPositioner>
                  <NavigationMenuPopup>
                    <NavigationMenuContent className="p-4 min-w-[20vw]">
                      <div className="flex flex-col gap-3">
                        <NavLink to="#fiction" className="text-sm font-medium hover:text-primary transition-colors">Fiction</NavLink>
                        <NavLink to="#non-fiction" className="text-sm font-medium hover:text-primary transition-colors">Non-Fiction</NavLink>
                        <NavLink to="#mystery" className="text-sm font-medium hover:text-primary transition-colors">Mystery</NavLink>
                        <NavLink to="#romance" className="text-sm font-medium hover:text-primary transition-colors">Romance</NavLink>
                        <NavLink to="#science-fiction" className="text-sm font-medium hover:text-primary transition-colors">Science Fiction</NavLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuPopup>
                </NavigationMenuPositioner>
              </NavigationMenuItem>

              {/* Authors with Submenu */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Authors</NavigationMenuTrigger>
                <NavigationMenuPositioner>
                  <NavigationMenuPopup>
                    <NavigationMenuContent className="p-4 min-w-[20vw]">
                      <div className="flex flex-col gap-3">
                        <NavLink to="#popular" className="text-sm font-medium hover:text-primary transition-colors">Popular Authors</NavLink>
                        <NavLink to="#featured" className="text-sm font-medium hover:text-primary transition-colors">Featured</NavLink>
                        <NavLink to="#new" className="text-sm font-medium hover:text-primary transition-colors">New Authors</NavLink>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuPopup>
                </NavigationMenuPositioner>
              </NavigationMenuItem>

              {/* Contact */}
              <NavigationMenuItem>
                <Button variant="ghost" asChild>
                  <NavLink to="#contact">Contact</NavLink>
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          {/* Theme Toggle Button */}
          <Button
            onClick={() => setIsDark(!isDark)}
            variant="outline"
            size="icon"
            className="rounded-full"
          >
            {isDark ? "🌙" : "☀️"}
          </Button>
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
