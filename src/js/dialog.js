document.addEventListener("DOMContentLoaded", () => {
  const dialog = document.getElementById("myDialog");
  const closeButton = document.getElementById("closeButton");
  const todayButton = document.getElementById("todayButton"); // 오늘 하루 열지 않기 버튼의 ID를 추가하세요.

  // 오늘 날짜를 YYYY-MM-DD 형식으로 생성
  const today = new Date().toDateString();

  // localStorage에서 저장된 날짜 읽기
  const closedDate = localStorage.getItem("closedDate");

  if (closedDate === today) {
    // 오늘 이미 닫았다면 다이얼로그 표시하지 않음
    return;
  }

  // 다이얼로그 표시 로직
  if (dialog && typeof dialog.showModal === "function") {
    dialog.showModal();
  } else {
    dialog.setAttribute("open", true);
  }

  // 다이얼로그 배경 클릭시 닫기
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      dialog.close();
    }
  });

  // 닫기 버튼 클릭 이벤트
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // 오늘 하루 열지 않기 버튼 클릭 이벤트
  todayButton.addEventListener("click", () => {
    // 오늘 날짜를 localStorage에 저장
    localStorage.setItem("closedDate", today);
    dialog.close();
  });
});
