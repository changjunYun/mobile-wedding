import React from 'react';
import groomImage from "./groom.png";
import brideImage from "./bride.png";

const GroomAndBride = () => {
  return (
    <div
      style={{
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
        backgroundColor: '#f9f9f9',
      }}
    >
      {/* 페이지 제목 */}
      <h1 style={{ fontSize: '36px', color: '#333', marginBottom: '20px' }}>Groom & Bride</h1>
      <h2 style={{ fontSize: '24px', color: '#777', marginBottom: '40px' }}>신랑 & 신부를 소개합니다.</h2>

      {/* 신랑 섹션 */}
      <div style={{ marginBottom: '50px' }}>
        <h3 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>신랑: 홍길동</h3>
        <div style={{marginLeft: '16px', marginRight: '16px'}}>
        <img
          src={groomImage} 
          alt="Groom"
          style={{
            width: '100%', // 가로는 화면을 꽉 채우도록 설정
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        />
        </div>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
          신랑님을 소개하는 내용을 입력해주세요. 예를 들면 신랑님의 취미, 성격, 직업 등 신랑에 대한
          자세한 정보를 여기에 추가할 수 있습니다.
        </p>
      </div>

      {/* 신부 섹션 */}
      <div>
        <h3 style={{ fontSize: '28px', color: '#333', marginBottom: '20px' }}>신부: 홍길순</h3>
        <div style={{marginLeft: '16px', marginRight: '16px'}}>
        <img
          src={brideImage}
          alt="Bride"
          style={{
            width: '100%', // 가로는 화면을 꽉 채우도록 설정
            height: 'auto',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            marginBottom: '20px',
          }}
        />
        </div>
        <p style={{ fontSize: '18px', color: '#555', lineHeight: '1.6', maxWidth: '600px', margin: '0 auto' }}>
          신부님을 소개하는 내용을 입력해주세요. 신부님의 취미, 성격, 직업 등을 소개하며 신부에 대한
          내용을 여기에 추가할 수 있습니다.
        </p>
      </div>
    </div>
  );
};

export default GroomAndBride;