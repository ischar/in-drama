import React from "react";
import logo from "../../assets/logo.png";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen bg-white dark:bg-dark-black">
      <img src={logo} alt="logo" className="w-32 h-32 animate-pulse" />
    </div>
  );
}
