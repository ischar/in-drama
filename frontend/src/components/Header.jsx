import { useNavigate } from "react-router-dom";
import logo from '../assets/logo.png';

export default function Header() {
  const navigate = useNavigate();
  
  function onClickLogo() {
    navigate('/');
  }

  return (
    <div className="flex flex-row w-full h-full items-center justify-between  text-light-fg-black dark:text-white">
      <div className="w-full h-full flex items-center">
        <img className="w-8 h-8 ml-[26.5px]" src={logo} alt="logo" onClick={onClickLogo} />
        <div className="flex flex-row ml-[50px]">
          <p className="mx-[18.5px] text-lg">장르별 검색</p>
          <p className="mx-[18.5px] text-lg ">여행 코스</p>
          <p className="mx-[18.5px] text-lg ">커뮤니티</p>
        </div>
      </div>
      <button type="button" className="justify-center w-[72px] h-8 rounded-md bg-light-element-gray1 dark:bg-dark-element-gray1">로그인</button>
    </div>
  )

}