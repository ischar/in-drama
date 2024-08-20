import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Searchbar({dramaName = ""}) {
  const [searchValue, setSearchValue] = useState(dramaName);
  const navigate = useNavigate();

  const activeButton = (e) => {
    navigate(`/location/${searchValue}`);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      activeButton(e);
    }
  };

  return (
    <form className="max-w-full mx-auto">
      <label className="mb-2 text-sm font-medium bg- text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-dark-element-yellow rounded-lg"
          placeholder="드라마를 검색해주세요."
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={(e) => activeEnter(e)}
          required
        />
        <button
          type="submit"
          className="absolute end-2.5 bottom-2.5 dark:bg-dark-element-yellow text-dark-black hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={(e) => activeButton(e)}
        >
          Search
        </button>
      </div>
    </form>
  );
}
