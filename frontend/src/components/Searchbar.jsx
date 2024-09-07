import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../utils/config";
import axios from "axios";
import Trie from "../utils/trie";

export default function Searchbar({ dramaName = "" }) {
  const [searchValue, setSearchValue] = useState(dramaName);
  const [dramaNames, setDramaNames] = useState();
  const [loading, setLoading] = useState(true);
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const searchSvg = (
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
  );

  const activeButton = () => {
    navigate(`/location/${searchValue}`);
  };

  const activeEnter = (e) => {
    if (e.key === "Enter") {
      activeButton(e);
    }
  };

  const handleDramaClick = (suggestion) => {
    navigate(`/location/${suggestion}`);
    setSearchValue('');
    setSuggestions([]);
  };

  useEffect(() => {
    // 비동기 함수 정의
    const fetchDramaNames = async () => {
      try {
        const response = await axios.get(`${API.SEARCH}`);
        setDramaNames(response.data.dramaNames);
      } catch (err) {
        console.log(err);
      }
    };

    fetchDramaNames(); // 비동기 함수 호출
  }, []); // 빈 배열을 의존성으로 주어 컴포넌트가 처음 렌더링될 때만 호출됨

  const trie = useMemo(() => {
    const trie = new Trie();
    if (dramaNames) {
      dramaNames.forEach((dramaName) => trie.insert(dramaName));
    }
    return trie;
  }, [dramaNames]);

  const dramaHandleChange = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value) {
      const results = trie.searchPrefix(value);
      setSuggestions(results);
    } else {
      setSuggestions([]);
    }
  };

  return (
    { dramaNames } && (
      <form className="max-w-full mx-auto">
        <label className="mb-2 text-sm font-medium bg- text-gray-900 sr-only dark:text-white">
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            {searchSvg}
          </div>
          <input
            type="search"
            id="default-search"
            className={
              "block w-full p-4 ps-10 text-sm text-gray-900 pointer-events:none outline-none outline " +
              (suggestions.length > 0 ? "rounded-t-lg" : "rounded-lg")
            }
            value={searchValue}
            placeholder="드라마를 검색해주세요."
            onChange={dramaHandleChange}
            onKeyDown={(e) => activeEnter(e)}
            autocomplete="off"
            required
          />
          {suggestions.length > 0 && (
            <div class="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24/25 border-b-0.5 border-gray-300 pointer-events-none"></div>
          )}

          <button
            type="submit"
            className="absolute end-2.5 bottom-2.5 dark:bg-dark-element-yellow text-dark-black focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm px-4 py-2 "
            onClick={(e) => activeButton(e)}
          >
            Search
          </button>
        </div>
        <div className="w-full relative">
          {suggestions.length > 0 && (
            <ul className="absolute w-full z-50 bg-white mx-0 text-sm text-black font-medium rounded-b-lg">
              {suggestions.map((suggestion, index) => (
                <div className="hover:bg-dark-element-yellow active:bg-dark-element-yellow active:opacity-85">
                  <li
                    s
                    onClick={() => handleDramaClick(suggestion)}
                    className="flex flex-row  my-4 text-left items-center"
                  >
                    <div className="items-center mr-4 ps-3 pointer-events-none">
                      {searchSvg}
                    </div>
                    {suggestion}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </form>
    )
  );
}
