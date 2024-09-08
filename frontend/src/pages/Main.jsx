/* eslint-disable */
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Searchbar from "../components/search/Searchbar";

export default function Main() {
  return (
    <div className="h-full w-full flex flex-col items-center justify-items-center text-center text-2xl font-semibold dark:text-white">
      <div className="my-20">
        <h2 className="mt-12">원하는 드라마의 촬영지를 찾아보세요.</h2>
        <div className="w-[640px] mx-auto mt-10">
          <Searchbar />
        </div>
        <div className="mt-20">
          <h2>최근 드라마</h2>
        </div>
      </div>
    </div>
  );
}
