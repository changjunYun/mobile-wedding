import React, { useEffect, useRef } from "react";

const Invitation = () => {
  const titleRef = useRef(null); // 제목 참조
  const subtitleRef = useRef(null); // 소제목 참조
  const paragraphRef = useRef(null); // 본문 참조

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.1, // 10% 이상 보이면 트리거
    };

    const handleIntersection = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate"); // 애니메이션 추가
          observer.unobserve(entry.target); // 한 번만 애니메이션 실행
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (titleRef.current) observer.observe(titleRef.current);
    if (subtitleRef.current) observer.observe(subtitleRef.current);
    if (paragraphRef.current) observer.observe(paragraphRef.current);

    return () => observer.disconnect(); // 컴포넌트 언마운트 시 정리
  }, []);

  return (
    <div
      style={{
        backgroundColor: "#f8f8f8", // 배경색
        padding: "20px", // 내용 여백
        fontFamily: "Arial, sans-serif", // 글꼴 설정
        color: "#333", // 텍스트 색상
        lineHeight: "1.8", // 줄 간격
        overflow: "hidden", // 넘침 방지
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* 제목 */}
      <h1
        ref={titleRef}
        className="fade-slide"
        style={{
          textAlign: "center",
          color: "#555",
          fontSize: "36px",
          marginBottom: "10px",
        }}
      >
        INVITATION
      </h1>

      {/* 소제목 */}
      <h2
        ref={subtitleRef}
        className="fade-slide"
        style={{
          textAlign: "center",
          fontSize: "24px",
          color: "#777",
          marginBottom: "20px",
        }}
      >
        소중한 분들을 초대합니다
      </h2>

      {/* 본문 */}
      <p
        ref={paragraphRef}
        className="fade-slide"
        style={{
          textAlign: "center",
          fontSize: "18px",
          color: "#444",
          maxWidth: "600px",
          margin: "0 auto",
        }}
      >
        곁에 있을 때
        <br />
        가장 나다운 모습이 되게 하는 사람,
        <br />
        꿈을 펼칠 수 있도록
        <br />
        서로에게 날개가 되어줄 한 사람을 만나
        <br />
        삶의 여행을 함께 떠나려 합니다.
        <br />
        <br />
        언제나 저희 곁에 있어주신 소중한 분들과
        <br />
        함께 첫 시작을 내딛고 싶습니다.
        <br />
        귀한 걸음으로 축복해 주시면 큰 기쁨으로 간직하겠습니다.
      </p>

      {/* 애니메이션 정의 */}
      <style>
        {`
          .fade-slide {
            opacity: 0; /* 초기 상태: 숨김 */
            transform: translateY(50px); /* 아래에서 시작 */
            transition: opacity 1s ease-out, transform 1s ease-out; /* 부드러운 전환 */
          }

          .fade-slide.animate {
            opacity: 1; /* 보임 */
            transform: translateY(0); /* 제자리로 이동 */
          }
        `}
      </style>
    </div>
  );
};

export default Invitation;