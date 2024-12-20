import React, { useState } from "react";
import mainImage from "./image1.png";
const OurPreciousMoment = () => {
  // 이미지를 배열로 설정 (여기에 실제 이미지 URL을 넣으시면 됩니다.)
  const images = [
    "./image1.png",
    "./image1.png",
    "./image1.png",
    "./image1.png",
    "./image1.png",
    "./image1.png",
    "./image1.png",
    "./image1.png",
    "./image1.png",
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  // 이미지 클릭 시 확대해서 보여주기
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      style={{
        backgroundColor: "#fff",
        color: "#333",
        fontFamily: "Arial, sans-serif",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "28px", marginBottom: "20px", color: "#333" }}>
        우리의 소중한 순간
      </h1>

      {/* 이미지 갤러리 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // 3개의 열
          gap: "15px",
          maxWidth: "900px", // 너비 제한
          width: "100%",
        }}
      >
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={mainImage}
              alt={`moment-${index}`}
              style={{
                width: "100%",
                height: "auto",
                aspectRatio: "1/1", // 1:1 비율 유지
                objectFit: "cover", // 잘리지 않도록 조정
                borderRadius: "8px",
                cursor: "pointer",
                transition: "transform 0.3s ease",
              }}
              onClick={() => handleImageClick(mainImage)} // 이미지 클릭 시 확대
            />
          </div>
        ))}
      </div>

      {/* 모달: 클릭된 이미지 확대해서 보여주기 */}
      {selectedImage && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
          }}
          onClick={handleCloseModal} // 모달 배경 클릭 시 닫기
        >
          <img
            src={selectedImage}
            alt="Selected"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)",
            }}
          />
        </div>
      )}
    </div>
  );
};

export default OurPreciousMoment;