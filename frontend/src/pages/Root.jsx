import React, { useState, useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";

export default function RootLayout() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const isLoading = useSelector((state) => state.loading.isLoading);
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
      {isLoading && (
        <div className="fixed inset-0 flex justify-center items-center bg-white dark:bg-dark-black z-50">
          <Loading /> 
        </div>
      )}
      <header className="h-20 w-full">
        <Header
          isProfileOpen={isProfileOpen}
          setIsProfileOpen={setIsProfileOpen}
        />
      </header>
      <main className="flex h-calc-100-minus-20">
        <Outlet />
      </main>
    </div>
  );
}
