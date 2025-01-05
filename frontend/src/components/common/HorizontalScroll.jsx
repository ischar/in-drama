import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function InfiniteCircularScroll({ children }) {
  const containerRef = useRef(null);
  const itemWidth = 192; // 각 아이템의 너비
  const [scrollPos, setScrollPos] = useState(0); // 현재 스크롤 위치
  const [items, setItems] = useState([...children]); // 동적으로 변경되는 아이템 배열

  const handleScroll = (e) => {
    e.preventDefault();
    const delta = e.deltaY * 0.4; // 스크롤 속도 조정
    setScrollPos((prev) => prev + delta);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  useEffect(() => {
    // 스크롤이 양 끝에 도달할 때 배열을 동적으로 재구성
    if (scrollPos >= items.length * itemWidth - itemWidth) {
      // 오른쪽 끝에 도달하면 첫 번째 콘텐츠를 배열 끝에 추가
      setItems((prev) => [...prev, ...children]);
    } else if (scrollPos <= 0) {
      // 왼쪽 끝에 도달하면 마지막 콘텐츠를 배열 앞으로 추가
      setItems((prev) => [...children, ...prev]);
      setScrollPos(children.length * itemWidth); // 위치 재조정
    }
  }, [scrollPos, items, children]);

  return (
    <div className="overflow-hidden h-64" ref={containerRef}>
      <motion.div
        className="flex space-x-4"
        animate={{ x: -scrollPos }}
        transition={{
          type: "spring",
          stiffness: 50,
          damping: 15,
        }}
        style={{ width: items.length * itemWidth }}
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="min-w-48 h-54 text-white flex items-center justify-center"
          >
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
