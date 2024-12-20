import React from "react";

const WeddingDay = () => {
  const weddingDate = new Date(2025, 11, 10); // 2025년 12월 10일 (월은 0부터 시작)

  // 달력 생성
  const generateCalendar = () => {
    const firstDay = new Date(weddingDate.getFullYear(), weddingDate.getMonth(), 1);
    const lastDay = new Date(weddingDate.getFullYear(), weddingDate.getMonth() + 1, 0);

    const daysInMonth = [];
    for (let i = 1; i <= lastDay.getDate(); i++) {
      daysInMonth.push(i);
    }

    const firstDayIndex = firstDay.getDay(); // 첫 날의 요일 (일요일: 0, 월요일: 1, ...)
    const calendar = Array(firstDayIndex).fill(null).concat(daysInMonth); // 빈 칸 추가

    // 7일씩 나누기
    const weeks = [];
    for (let i = 0; i < calendar.length; i += 7) {
      weeks.push(calendar.slice(i, i + 7));
    }
    return weeks;
  };

  const calendarWeeks = generateCalendar();

  return (
    <div
      style={{
        backgroundColor: "#fff", // 흰 배경
        color: "#333", // 텍스트 색상
        fontFamily: "Arial, sans-serif",
        padding: "20px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start", // 위로 붙이기
        alignItems: "center",
      }}
    >
      {/* WEDDING DAY 정보 */}
      <h1 style={{ fontSize: "36px", marginBottom: "10px", marginTop: "20px" }}>WEDDING DAY</h1>
      <h2 style={{ fontSize: "18px", marginBottom: "30px" }}>
        2025.12.10 토요일 오후 12:00
        <br />
        아난티 웨딩홀
      </h2>

      {/* 달력 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(7, 1fr)", // 7열 그리드
          gap: "10px",
          justifyContent: "center",
          alignItems: "center",
          width: "calc(100% - 40px)", // 양옆 패딩 20px 유지
          maxWidth: "600px", // 최대 너비 600px로 확장
          margin: "0 auto",
        }}
      >
        {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
          <div
            key={day}
            style={{
              fontWeight: "bold",
              color: "#555",
              fontSize: "16px",
            }}
          >
            {day}
          </div>
        ))}
        {calendarWeeks.flat().map((day, index) => (
          <div
            key={index}
            style={{
              color: day === weddingDate.getDate() ? "#ff0000" : "#333",
              fontWeight: day === weddingDate.getDate() ? "bold" : "normal",
              fontSize: "16px",
            }}
          >
            {day || ""}
          </div>
        ))}
      </div>

      {/* 문구 */}
      <div
        style={{
          marginTop: "30px",
          textAlign: "center",
          color: "#555",
          fontSize: "18px",
          lineHeight: "1.6",
        }}
      >
        <p>귀한 걸음으로 축복해주시면</p>
        <p>큰 기쁨으로 간직하겠습니다.</p>
        <br />
        <p>
          홍길동 . 어머님 의 아들 길동
          <br />
          아버님 . 어머님 의 딸 길순
        </p>
      </div>

      {/* 버튼 */}
      <a
        href="tel:01077445901" // 전화 연결
        style={{
          marginTop: "20px",
          display: "inline-flex", // 아이콘과 텍스트 정렬
          alignItems: "center",
          padding: "10px 20px",
          backgroundColor: "#fff", // 흰색 배경
          color: "#555", // 회색 텍스트
          textDecoration: "none",
          border: "1px solid #ddd", // 연한 회색 테두리
          borderRadius: "5px",
          fontSize: "16px",
          fontWeight: "bold",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // 살짝 그림자 추가
          transition: "all 0.3s ease", // 호버 애니메이션
        }}
        onMouseOver={(e) => (e.target.style.borderColor = "#aaa")} // 호버 시 테두리 색상 변경
        onMouseOut={(e) => (e.target.style.borderColor = "#ddd")}
      >
        <span style={{ marginRight: "8px", fontSize: "18px" }}>📞</span> {/* 전화 아이콘 */}
        전화로 축하인사하기
      </a>
    </div>
  );
};

export default WeddingDay;