import React from "react";

const HeartfeltWishes = () => {
  const groomAccount = "123-4567-8901";
  const brideAccount = "987-6543-2101";

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      alert(`${text}가 복사되었습니다.`);
    });
  };

  return (
    <div
      style={{
        backgroundColor: "#f8f8f8", // 배경색
        color: "#333",
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // 위로 붙이기
        alignItems: "center",
      }}
    >
      {/* 제목 */}
      <div style={{ marginTop: "20px", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "28px", margin: "0", color: "#333", fontWeight: "bold" }}>
          마음을 전하실 곳
        </h1>
      </div>

      {/* 메시지 */}
      <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.6", marginBottom: "30px" }}>
        저희 두 사람의 소중한 시작을
        <br />
        축하해주시는 모든 분들께 감사드립니다.
        <br />
        따뜻한 진심을 감사히 오래도록 간직하고
        <br />
        행복하게 잘 살겠습니다.
      </p>

      {/* 버튼 - 신랑측 계좌 */}
      <button
        onClick={() => copyToClipboard(groomAccount)}
        style={{
          display: "block",
          width: "80%",
          maxWidth: "400px",
          marginBottom: "10px",
          padding: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
          backgroundColor: "#f5f5f5", // 연한 회색 배경
          border: "1px solid #ddd", // 연한 회색 테두리
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.borderColor = "#bbb")}
        onMouseOut={(e) => (e.target.style.borderColor = "#ddd")}
      >
        신랑측 계좌번호 복사하기
      </button>

      {/* 버튼 - 신부측 계좌 */}
      <button
        onClick={() => copyToClipboard(brideAccount)}
        style={{
          display: "block",
          width: "80%",
          maxWidth: "400px",
          marginBottom: "10px",
          padding: "12px",
          fontSize: "16px",
          fontWeight: "bold",
          color: "#333",
          backgroundColor: "#f5f5f5", // 연한 회색 배경
          border: "1px solid #ddd", // 연한 회색 테두리
          borderRadius: "5px",
          cursor: "pointer",
          transition: "all 0.3s ease",
        }}
        onMouseOver={(e) => (e.target.style.borderColor = "#bbb")}
        onMouseOut={(e) => (e.target.style.borderColor = "#ddd")}
      >
        신부측 계좌번호 복사하기
      </button>
    </div>
  );
};

export default HeartfeltWishes;