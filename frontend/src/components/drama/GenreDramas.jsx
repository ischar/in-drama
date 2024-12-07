import DramaSection from "./DramaSection";

export default function GenreDramas({ children }) {
  return (
    <div className="w-full my-4 select-none overflow-x-hidden">
      <h2 className="font-semibold text-xl mb-4 text-white text-left">
        {children}
      </h2>
      <div className="flex justify-center items-center w-full">
        {/* 수정된 부분 */}
        <div className="flex w-[1400px]">
          <DramaSection genre={children} />
        </div>
      </div>
    </div>
  );
}
