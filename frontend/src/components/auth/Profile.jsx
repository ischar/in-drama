import close from "../../assets/close.png";

export default function Profile({ user, onClick }) {
  return (
    <div className="absolute z-49 top-10 right-10 w-64 h-56 rounded-lg bg-dark-element-gray1 ">
      <div className="mt-4 mr-4 flex justify-end">
        <img onClick={onClick} src={close} className="w-4 h-4" alt="close" />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img
          src={user.picture}
          className="w-16 h-16 mt-3 rounded-lg"
          alt="profile"
        />
        <p className="mt-3 mb-2">안녕하세요, {user.name}님.</p>
        <ul className="flex flex-row mt-2 text-center items-center justify-center">
          <li className="bg-zinc-800 px-6 py-3 rounded-lg text-sm mx-0.5">
            마이페이지
          </li>
          <li className="bg-zinc-800 px-6 py-3 rounded-lg text-sm mx-0.5">
            로그아웃
          </li>
        </ul>
      </div>
    </div>
  );
}
