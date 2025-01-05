import React, { useEffect } from "react";

export default function RoadView({coord}) {
  const { kakao } = window;  
  useEffect(() => {
    if (coord === undefined) return null;
    const roadviewContainer = document.getElementById("roadview"); //로드뷰를 표시할 div
    if (!roadviewContainer) return;
    const roadview = new kakao.maps.Roadview(roadviewContainer);
    const roadviewClient = new kakao.maps.RoadviewClient();
    const position = new kakao.maps.LatLng(coord.lat, coord.lng);

    roadviewClient.getNearestPanoId(position, 50, function (panoId) {
      roadview.setPanoId(panoId, position);
    });
  }, [coord, kakao.maps.LatLng, kakao.maps.Roadview, kakao.maps.RoadviewClient]);

  return <div id="roadview" className="w-[540px] h-[303px]" />;
}
