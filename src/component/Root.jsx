import { useEffect, useState } from "react";
import { Outlet } from "react-router";
import HydrateFallbackElement2 from "./Supporting_Components/HydrateFallbackElement2";
import NavMenu from './1_Header/NavMenu';
import HeroCard from './2_Homepage/2.1_Hero/HeroCard';

const Root = () => {
  let [isDark, setIsDark] = useState(() => {
    // Check device preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches; //To be noted
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e) => setIsDark(e.matches);

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    isDark ? document.documentElement.classList.add("dark") : document.documentElement.classList.remove("dark"); // Apply dark class to html element
  }, [isDark]); //To be noted
/*
  const [isLoading, setIsLoading] = useState(true);
  //   const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    // Simulate a 3-second loading delay so HydrateFallback is visible
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <HydrateFallbackElement2 className="flex flex-col h-screen justify-center items-center" />;
  }
*/
  return (
    <div className="flex flex-col min-h-screen min-w-screen">
      {/* Header with Theme Toggle */}
      <header className="sticky top-0 z-40 border-b border-border bg-background">
        <NavMenu isDark={isDark} setIsDark={setIsDark}></NavMenu>
      </header>

      {/* Main Content */}
      <main className="flex justify-center h-full flex-1 overflow-auto">
        <div className="flex flex-col items-center flex-1">
          <Outlet/>
        </div>
      </main>

      {/* Footer */}
      <footer className="sticky bottom-0 w-full border-t border-border bg-background p-6 text-center text-sm text-muted-foreground">
        <p>&copy; 2023 Book Vibe. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Root;
