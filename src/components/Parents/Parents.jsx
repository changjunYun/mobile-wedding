import React from "react";
import groomParentsImage from "./groom-parents.png"; 
import brideParentsImage from "./bride-parents.png"; 

const Parents = () => {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        backgroundColor: "#fff",
        padding: "20px",
      }}
    >
      {/* 페이지 제목 */}
      <h1 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>양가 혼주</h1>
      <h2 style={{ fontSize: "24px", color: "#777", marginBottom: "40px" }}>우리 부모님</h2>

      {/* 부모님 소개 텍스트 */}
      <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto", marginBottom: "40px" }}>
        저희의 시작을 사랑으로 응원해주신 양가 부모님을 소개합니다.
      </p>

      {/* 부모님 사진을 가로로 나열 */}
      <div
        style={{
          display: "flex",
          justifyContent: "center", // 가로 정렬
          gap: "32px", // 두 사진 사이의 간격
          marginBottom: "50px",
        }}
      >
        {/* 신랑 부모님 */}
        <div style={{ width: "45%" }}>
          <img
            src={groomParentsImage}
            alt="Groom Parents"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          />
           <h3 style={{ fontSize: "18px", color: "#333", marginBottom: "20px" }}>
            신랑 부모님<br />
            김영철 🩵 이영희
          </h3>
        </div>

        {/* 신부 부모님 */}
        <div style={{ width: "45%" }}>
          <img
            src={brideParentsImage}
            alt="Bride Parents"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              marginBottom: "20px",
            }}
          />
            <h3 style={{ fontSize: "18px", color: "#333", marginBottom: "20px" }}>
            신부 부모님<br />
            김영철 🩵 이영희
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Parents;