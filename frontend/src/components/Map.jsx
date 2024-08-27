/* eslint-disable */
import React, { useEffect } from "react";

const { kakao } = window;
export default function Map({ locations }) {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    const positions = [];
    if (locations !== undefined) {
      const data = locations.locations;
      for (let location of data) {
        positions.push({
          latlng: new kakao.maps.LatLng(location.latitude, location.longitude),
        });
      }
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(data[0].latitude, data[0].longitude), //지도의 중심좌표.
        level: 13, //지도의 레벨(확대, 축소 정도)
      };
      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴

      console.log(positions);
      const imageSrc =
        "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png";
      const imageSize = new kakao.maps.Size(24, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);
      for (let position of positions) {
        const marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
          title: position.title,
          image: markerImage,
        });
      }
    }
  }, []);

  return (
    <>
      <div id="map" className="w-full h-[712px]" />
    </>
  );
}