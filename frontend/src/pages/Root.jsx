import React, { useState, useEffect, useRef } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/common/Header";

export default function RootLayout() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const rootRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={rootRef} className="relative">
      <header className="h-20 w-full">
        <Header
          isProfileOpen={isProfileOpen}
          setIsProfileOpen={setIsProfileOpen}
        />
      </header>
      <main className="h-calc-100-minus-20">
        <Outlet />
      </main>
    </div>
  );
}
