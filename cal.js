const calendar = (date) => {
  const CurrentYear = new Date(date).getFullYear();
  const CurrentMonth = new Date(date).getMonth() + 1;
  const today = new Date(date).getDate();
  const prevMon = new Date(CurrentYear, CurrentMonth-1, 0).getDate();
  const thisMon = new Date(CurrentYear, CurrentMonth, 0).getDate();
  const prevDay = new Date(CurrentYear, CurrentMonth-1, 1).getDay();

  console.log(CurrentYear, CurrentMonth, today, prevMon, thisMon, prevDay);
  //2022 8 23 31 31 1

  const dateBoard = document.querySelector('.dateBoard');
  dateBoard.innerHTML = '';
  // 다음달 날짜 표시하기
  for(let i=0; i<prevDay; i++){
    dateBoard.innerHTML += `<div class=""noColor">공백</div>`;
  }

  for (let i=1; i<=thisMon; i++) {
    dateBoard.innerHTML += "<div>" + i + "</div>";
  }

  document.querySelector('.dateTitle').innerText = CurrentYear + "년 " + CurrentMonth + "월";

};
$(document).ready(calendar);

//버튼 클릭 -> 날짜 변경
const makeCal = () => {
  const date = new Date();

  calendar(date);
  document.querySelector('.beforeDay').onclick = () => {
    calendar(new Date(date.setMonth(date.getMonth()-1)));
  };

  document.querySelector('.afterDay').onclick = () => {
    calendar(new Date(date.setMonth(date.getMonth()+1)));
  };
};
$(document).ready(makeCal);
