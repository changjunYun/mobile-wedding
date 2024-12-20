import React from "react";
import firstMeetingImage from "./ourstory1.png"; // 첫 만남 사진
import springImage from "./ourstory2.png"; // 봄 사진
import summerImage from "./ourstory3.png"; // 여름 사진
import autumnImage from "./ourstory5.png"; // 가을 사진
import winterImage from "./ourstory4.png"; // 겨울 사진

const OurStory = () => {
    return (
      <div
        style={{
          fontFamily: "Arial, sans-serif",
          textAlign: "center",
          backgroundColor: "#f9f9f9",
          padding: "20px",
        }}
      >
        {/* 페이지 제목 */}
        <h1 style={{ fontSize: "36px", color: "#333", marginBottom: "20px" }}>OUR STORY</h1>
        <h2 style={{ fontSize: "24px", color: "#777", marginBottom: "40px" }}>우리의 이야기</h2>
  
        {/* 첫 만남 섹션 */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>우리의 첫 만남</h3>
          <img
            src={firstMeetingImage}
            alt="First Meeting"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            열심히 회사에서 일하다가 만나게 된 첫 만남. <br />이 순간이 우리의 이야기의 시작이었어요.
          </p>
        </div>
  
        {/* 봄 섹션 */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>봄에는 벚꽃 구경</h3>
          <img
            src={springImage}
            alt="Spring"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            봄에는 벚꽃 구경을 함께 다니며 <br />자연 속에서 소중한 순간들을 공유했어요.
          </p>
        </div>
  
        {/* 여름 섹션 */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>여름에는 교회 수련회</h3>
          <img
            src={summerImage}
            alt="Summer"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            여름에는 제주도로 교회 수련회를 가며 <br />신앙과 사랑을 더욱 깊이 나누었어요.
          </p>
        </div>
  
        {/* 가을 섹션 */}
        <div style={{ marginBottom: "50px" }}>
          <h3 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>가을에는 커플 잠바</h3>
          <img
            src={autumnImage}
            alt="Autumn"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            가을에는 커플 잠바를 입고 함께 등산하며, <br />자연 속에서 소중한 추억을 쌓았어요.
          </p>
        </div>
  
        {/* 겨울 섹션 */}
        <div>
          <h3 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>겨울에는 커플 목도리</h3>
          <img
            src={winterImage}
            alt="Winter"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "8px",
              marginBottom: "20px",
            }}
          />
          <p style={{ fontSize: "18px", color: "#555", lineHeight: "1.6", maxWidth: "600px", margin: "0 auto" }}>
            겨울에는 커플 목도리를 하고 서울을 여행하며, <br />따뜻한 시간을 보냈어요.
          </p>
        </div>
      </div>
    );
  };
  
  export default OurStory;