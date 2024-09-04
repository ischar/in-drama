/* eslint-disable */
import { Outlet, useNavigation } from "react-router-dom";
import Header from "../components/Header";

export default function RootLayout() {
  return (
    <>
      <header className="h-20 w-full">
        <Header />
      </header>
      <main className="h-[calc(100%-20px)]">
        <Outlet />
      </main>
      <footer></footer>
    </>
  );
}
