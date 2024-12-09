import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/actions/loadingActions";
import { API } from "../../utils/config";
import axios from "axios";
import write from "../../assets/write.png";
import Content from "../../components/community/Content";

export default function Community() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isNoticeBoard, setIsNoticeBoard] = useState(true);
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentPosts, setCurrentPosts] = useState();

  const [indexOfFirstPost, setIndexOfFirstPost] = useState();
  const [indexOfLastPost, setIndexOfLastPost] = useState();
  const postsPerPage = 15;

  useEffect(() => {
    dispatch(setLoading(true));
    axios
      .get(`${API.POST}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((error) => {})
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, []);

  useEffect(() => {
    filterPosts();
    setCurrentPage(1);
  }, [posts, isNoticeBoard]);

  useEffect(() => {
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const current = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    setCurrentPosts(current);
  }, [filteredPosts, currentPage]);

  const filterPosts = () => {
    const filtered = posts.filter((post) =>
      isNoticeBoard ? post.category === "NOTICE" : post.category === "FREE"
    );
    setFilteredPosts(filtered);
  };

  function handleToggleBoard(current) {
    setIsNoticeBoard(current === "NOTICE");
  }

  function handleCreatePost() {
    if (user !== null) {
      navigate("new");
    } else {
      alert("로그인하세요!");
    }
  }

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="w-[1232px] h-full mx-auto flex flex-col justify-between">
      <div>
        <div className="flex flex-row mt-16 justify-between">
          <div>
            <button
              onClick={() => handleToggleBoard("NOTICE")}
              className={`${
                isNoticeBoard
                  ? "bg-dark-element-yellow dark:text-white hover:bg-dark-element-yellow mr-1 rounded-sm w-28 h-12 transition-colors ease-in-out duration-300"
                  : "dark:bg-dark-element-gray1 dark:text-white hover:bg-dark-element-yellow mr-1 rounded-sm w-28 h-12 transition-colors ease-in-out duration-300"
              }`}
            >
              공지사항
            </button>
            <button
              onClick={() => handleToggleBoard("FREE")}
              className={`${
                !isNoticeBoard
                  ? "bg-dark-element-yellow dark:text-white hover:bg-dark-element-yellow mr-1 rounded-sm w-28 h-12 transition-colors ease-in-out duration-300"
                  : "dark:bg-dark-element-gray1 dark:text-white hover:bg-dark-element-yellow mr-1 rounded-sm w-28 h-12 transition-colors ease-in-out duration-300"
              }`}
            >
              자유게시판
            </button>
          </div>
          <div className="flex items-end">
            <img
              src={write}
              onClick={handleCreatePost}
              className="w-6 h-6"
              alt="write"
            />
          </div>
        </div>

        <div className="mt-4">
          <ul>
            {currentPosts && currentPosts.length > 0 ? (
              currentPosts.map((post, index) => (
                <Content key={index} post={post} />
              ))
            ) : (
              <div className="mt-48 items-center justify-center">
                <li className="text-white text-center ">게시글이 없습니다</li>
              </div>
            )}
          </ul>
        </div>
      </div>

      <div className="flex justify-center mb-16">
        {Array.from({
          length: Math.ceil(filteredPosts.length / postsPerPage),
        }).map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`${
              currentPage === index + 1
                ? "bg-dark-element-yellow text-white"
                : "bg-gray-300 text-black"
            } mx-1 px-3 py-1 rounded-md`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
