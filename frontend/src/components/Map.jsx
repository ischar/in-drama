import React, { useEffect } from "react";

const { kakao } = window;
export default function Map({ locationInfos }) {
  useEffect(() => {
    const container = document.getElementById("map"); //지도를 담을 영역의 DOM 레퍼런스

    const positions = [];
    if (locationInfos !== undefined) {
      const data = locationInfos.locationInfos;
      console.log(data);
      for (let location of data) {
        positions.push({
          latlng: new kakao.maps.LatLng(location.latitude, location.longitude),
        });
      }
      const options = {
        //지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(data[0].latitude, data[0].longitude), //지도의 중심좌표.
        level: 4, //지도의 레벨(확대, 축소 정도)
      };
      const map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
      const imageSrc = "https://i.postimg.cc/SN71Yx0h/marker.png";
      const imageSize = new kakao.maps.Size(32, 35);
      const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize);

      const clusterer = new kakao.maps.MarkerClusterer({
        map: map, // 마커들을 클러스터로 관리하고 표시할 지도 객체
        averageCenter: true, // 클러스터에 포함된 마커들의 평균 위치를 클러스터 마커 위치로 설정
        minLevel: 10, // 클러스터 할 최소 지도 레벨
      });

      let markers = [];
      for (let position of positions) {
        const content =
          '<div><img src="https://i.postimg.cc/W44QPMkY/marker.png" style="width:13px height:13px;" alt="dsf"></img>s</div>';
        const marker = new kakao.maps.Marker({
          map: map,
          position: position.latlng,
          title: position.title,
          image: markerImage,
        });
        markers.push(marker);
      }
      clusterer.addMarkers(markers);
    }
  }, []);

  return <div id="map" className="w-full h-[1024px] grayscale" />;
}
