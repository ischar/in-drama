import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "../auth/Login";
import logo from "../../assets/logo.png";
import Profile from "../auth/Profile";

export default function Header({ isProfileOpen, setIsProfileOpen }) {
  const { user, isLoggedIn } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  function onClickLogo() {
    navigate("/");
  }

  function handleProfileToggle() {
    setIsProfileOpen((prev) => !prev);
  }

  function handleClickProfile(event) {
    if (event) {
      event.stopPropagation(); // Prevents click from bubbling up to document
    }
    handleProfileToggle((prev) => !prev);
  }

  return (
    <div className="flex flex-row w-full h-full items-center justify-between text-light-fg-black dark:text-white">
      <div className="w-full h-full flex items-center">
        <img
          className="w-8 h-8 ml-[44px]"
          src={logo}
          alt="logo"
          onClick={onClickLogo}
        />
        <div className="flex flex-row ml-[50px] text-sm">
          <p className="mx-[18.5px]">장르별 검색</p>
          <p className="mx-[18.5px]">여행 코스</p>
          <p className="mx-[18.5px]">커뮤니티</p>
        </div>
      </div>
      {isLoggedIn ? (
        <div className="relative flex flex-col z-50">
          <img
            src={user.picture}
            onClick={(e) => handleClickProfile(e)}
            className="w-8 h-8 mr-[44px] justify-center rounded-md bg-light-element-gray1 dark:bg-dark-element-gray1 hover:opacity-75"
            alt="profile"
          />
          {isProfileOpen && (
            <Profile user={user} onClick={handleClickProfile} />
          )}
        </div>
      ) : (
        <Login />
      )}
    </div>
  );
}
