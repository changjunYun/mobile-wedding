import React, { useState } from "react";

const Guestbook = () => {
  const [guestbookEntries, setGuestbookEntries] = useState([
    { name: "홍길동", date: "2025-12-10", message: "축하드립니다! 행복한 결혼생활 되세요!" },
    { name: "김길순", date: "2025-12-11", message: "두 분의 미래가 행복으로 가득하길 기도합니다!" },
    { name: "이영희", date: "2025-12-12", message: "행복한 결혼 되세요!" },
    { name: "박철수", date: "2025-12-13", message: "두 분의 앞날에 축복이 가득하기를!" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 2; // 페이지당 항목 수를 2로 설정

  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = guestbookEntries.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(guestbookEntries.length / entriesPerPage);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newEntry, setNewEntry] = useState({ name: "", message: "" });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddEntry = () => {
    if (!newEntry.name || !newEntry.message) {
      alert("이름과 메시지를 모두 입력해주세요.");
      return;
    }
    const today = new Date().toISOString().split("T")[0];
    setGuestbookEntries([
      ...guestbookEntries,
      { name: newEntry.name, date: today, message: newEntry.message },
    ]);
    setNewEntry({ name: "", message: "" });
    setIsModalOpen(false);
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fff",
        padding: "20px",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "32px", color: "#333", marginBottom: "20px" }}>방명록</h1>

      <div>
        {currentEntries.map((entry, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              marginBottom: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3 style={{ fontSize: "22px", color: "#333", marginBottom: "10px" }}>{entry.name}</h3>
            <p style={{ fontSize: "14px", color: "#999", marginBottom: "15px" }}>{entry.date}</p>
            <p style={{ fontSize: "16px", color: "#555", lineHeight: "1.8" }}>{entry.message}</p>
          </div>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "20px" }}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            style={{
              padding: "8px 12px",
              margin: "0 5px",
              backgroundColor: currentPage === index + 1 ? "#d1d5db" : "#f5f5f5", 
              color: currentPage === index + 1 ? "#fff" : "#333",
              border: "1px solid #ddd",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight: "bold",
              fontSize: "14px",
              transition: "background-color 0.3s ease, color 0.3s ease",
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button
          onClick={() => setIsModalOpen(true)}
          style={{
            padding: "12px 25px",
            backgroundColor: "#fff",
            color: "#333",
            border: "1px solid #ddd",
            borderRadius: "5px",
            cursor: "pointer",
            fontWeight: "bold",
            fontSize: "16px",
          }}
        >
          방명록 적기
        </button>
      </div>

      {isModalOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "0 16px",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "10px",
              maxWidth: "400px",
              width: "100%",
              boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            }}
          >
            <h2 style={{ fontSize: "24px", marginBottom: "20px", color: "#333" }}>방명록 적기</h2>
            <input
              type="text"
              name="name"
              placeholder="이름을 입력하세요"
              value={newEntry.name}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                boxSizing: "border-box",
              }}
            />
            <textarea
              name="message"
              placeholder="메시지를 입력하세요"
              value={newEntry.message}
              onChange={handleInputChange}
              style={{
                width: "100%",
                padding: "10px",
                borderRadius: "5px",
                border: "1px solid #ddd",
                marginBottom: "10px",
                resize: "none",
                height: "100px",
                boxSizing: "border-box",
              }}
            />
            <div style={{ textAlign: "right" }}>
              <button
                onClick={() => setIsModalOpen(false)}
                style={{
                  marginRight: "10px",
                  padding: "10px 15px",
                  border: "none",
                  backgroundColor: "#f5f5f5",
                  color: "#333",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                취소
              </button>
              <button
                onClick={handleAddEntry}
                style={{
                  padding: "10px 15px",
                  border: "none",
                  backgroundColor: "#4CAF50",
                  color: "#fff",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                추가
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Guestbook;