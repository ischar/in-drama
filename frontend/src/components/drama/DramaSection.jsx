import React, { useState, useEffect } from "react";
import { API, GENRE_MAP } from "../../utils/config";
import axios from "axios";
import HorizontalScroll from "../common/HorizontalScroll";
import Drama from "./Drama";
import { useDispatch, useSelector } from "react-redux";
import { setLoading } from "../../store/actions/loadingActions";

export default function DramaSection({ genre = "recent" }) {
  const [thumbnails, setThumbnails] = useState([]);
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.loading.isLoading);

  useEffect(() => {
    const genreKey = genre !== "recent" ? GENRE_MAP.get(genre) : genre;
    dispatch(setLoading(true)); // 로딩 시작
    axios
      .get(`${API.DRAMA}/${genreKey}`)
      .then((res) => {
        setThumbnails(res.data.dramaThumbnailList);
        console.log(res.data.dramaThumbnailList);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, [genre]);

  return (
    <div className="w-full">
      {thumbnails.length > 0 ? (
        <HorizontalScroll>
          {thumbnails.map((thumbnail, index) => (
            <Drama title={thumbnail.name} image={thumbnail.thumbnailPath} />
          ))}
        </HorizontalScroll>
      ) : (
        <p>드라마가 없습니다.</p>
      )}
    </div>
  );
}
