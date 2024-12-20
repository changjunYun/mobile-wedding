import React, { useEffect } from "react";

const Directions = () => {
  useEffect(() => {
    // 카카오맵 API 로드
    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=63842773ba0c1bf62dc0fc9e4cec7281&autoload=false`;
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(() => {
        const container = document.getElementById("map"); // 지도를 표시할 div
        const options = {
          center: new window.kakao.maps.LatLng(35.1885, 129.2234), // 서울 시청 좌표
          level: 3, // 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(container, options); // 지도 생성

        // 마커 생성
        const markerPosition = new window.kakao.maps.LatLng(35.1885, 129.2234);
        const marker = new window.kakao.maps.Marker({
          position: markerPosition,
        });
        marker.setMap(map);
      });
    };

    return () => script.remove(); // 컴포넌트 언마운트 시 스크립트 제거
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "24px", marginBottom: "10px" }}>오시는 길</h1>
      <div style={{ textAlign: "center", fontSize: "12px", marginBottom: "10px" }}>부산광역시 기장군 기장읍 기장해안로 268-32</div>
      <div
        id="map"
        style={{
          width: "100%",
          height: "400px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      ></div>
    </div>
  );
};

export default Directions;