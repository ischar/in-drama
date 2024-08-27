/* eslint-disable */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Searchbar from "../components/Searchbar";

export default function Main() {
  return (
    <div className="items-center justify-items-center text-center text-2xl font-semibold dark:text-white">
      <h2 className="mt-12">원하는 드라마의 촬영지를 찾아보세요.</h2>
      <div className="max-w-xl mx-auto mt-10">
        <Searchbar />
      </div>
      <button />
      <h2>최근 드라마</h2>
    </div>
  );
}