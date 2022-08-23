const calendar = () => {
  const date = new Date();
  const CurrentYear = date.getFullYear();
  const CurrentMonth = date.getMonth() + 1;
  const prevDay = new Date(CurrentYear, CurrentMonth-1, 1).getDay();
  const lastDay = new Date(CurrentYear, CurrentMonth, 0);

  console.log(prevDay);
  console.log(lastDay);


};
$(document).ready(calendar);