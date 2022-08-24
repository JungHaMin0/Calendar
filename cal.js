const calendar = () => {
  const date = new Date();
  const CurrentYear = date.getFullYear();
  const CurrentMonth = date.getMonth() + 1;
  const today = date.getDate();
  const prevMon = new Date(CurrentYear, CurrentMonth-1, 0).getDate();
  //전 달의 마지막 날짜
  const thisMon = new Date(CurrentYear, CurrentMonth, 0).getDate();
  //이번 달의 마지막 날짜

  const prevDay = new Date(CurrentYear, CurrentMonth-1, 1).getDay();

  console.log(CurrentYear, CurrentMonth, today, prevMon, thisMon);
  //2022 8 23 31 31
  console.log(prevDay); //1

  const dateBoard = document.querySelector('.dateBoard');
// 다음달 날짜 표시하기
  for(let i=0; i<prevDay; i++){
    dateBoard.innerHTML += `<div class=""noColor">공백</div>`;
  }

  for (let i=1; i<=thisMon; i++) {
    dateBoard.innerHTML += "<div>" + i + "</div>";
  }

  const dateTitle = document.querySelector('.dateTitle');
  dateTitle.innerText = CurrentYear + "년 " + CurrentMonth + "월";

};
$(document).ready(calendar);

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