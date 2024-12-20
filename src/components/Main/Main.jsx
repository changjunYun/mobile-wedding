import React from "react";
import mainImage from "./image1.png";

const Main = () => {
  return (
    <div
      style={{
        position: "relative", // 텍스트를 이미지 위에 배치하기 위해 relative 설정
        width: "100vw", // 전체 화면 너비
        height: "100vh", // 전체 화면 높이
        overflow: "hidden", // 넘침 방지
        backgroundColor: "white", // 빈 공간 배경
      }}
    >
      {/* 이미지 */}
      <img
        src={mainImage}
        alt="Example"
        style={{
          width: "100vw",
          height: "100vh",
          objectFit: "cover", // 비율 유지하며 빈 공간 없이 맞춤
          objectPosition: "center", // 이미지를 중간에 위치
        }}
      />

      {/* 텍스트 */}
      <div
        style={{
          position: "absolute", // 이미지 위에 텍스트 고정
          bottom: "20px", // 애니메이션 시작 위치 (하단)
          width: "100%", // 텍스트를 중앙 정렬하기 위해 전체 너비
          textAlign: "center", // 중앙 정렬
          color: "white", // 흰색 글씨
          fontFamily: "Arial, sans-serif", // 폰트 스타일
          fontWeight: "bold", // 폰트 굵기
          textShadow: "2px 2px 5px rgba(0, 0, 0, 0.5)", // 텍스트 그림자
          animation: "slide-up 2s ease-out", // 애니메이션 설정
        }}
      >
        <div style={{ fontSize: "24px", marginBottom: "10px" }}>
          홍길동 & 홍길순
        </div>
        <div style={{ fontSize: "18px" }}>
          2025.12.20 SAT 12:00 PM
        </div>
        <div style={{ fontSize: "18px" }}>
          아난티코브 웨딩홀
        </div>
      </div>

      {/* 애니메이션 정의 */}
      <style>
        {`
          @keyframes slide-up {
            0% {
              transform: translateY(100%); /* 하단에서 시작 */
              opacity: 0; /* 투명도 0 */
            }
            50% {
              opacity: 1; /* 중간에서 투명도 증가 */
            }
            100% {
              transform: translateY(0); /* 원래 위치로 */
              opacity: 1; /* 완전히 보임 */
            }
          }
        `}
      </style>
    </div>
  );
};

export default Main;