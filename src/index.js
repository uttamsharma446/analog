import "./styles.css";

const secondsEle = document.querySelector(".hand.sec");
const minEle = document.querySelector(".hand.min");
const hoursEle = document.querySelector(".hand.hours");
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
const days = [
  "sunday",
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday"
];
const setTime = () => {
  const now = new Date();
  const seconds = now.getSeconds();

  const secondsDegree = (seconds / 60) * 360 + 90;
  secondsEle.style.transform = `rotate(${secondsDegree}deg)`;
  const mins = now.getMinutes();
  console.log(mins);
  const minsDegree = (mins / 60) * 360 + 90;
  minEle.style.transform = `rotate(${minsDegree}deg)`;
  const hours = now.getHours();
  const hoursDegree = (hours / 12) * 360 + 90 + mins / 2;
  hoursEle.style.transform = `rotate(${hoursDegree}deg)`;
};

const now = new Date();
const date = document.querySelector(".date");
const month = document.querySelector(".month");
const day = document.querySelector(".day");
month.innerHTML = `${months[
  now.getMonth()
].toUpperCase()} ${now.getFullYear()}`;
day.innerHTML = days[now.getDay()].toUpperCase();
date.innerHTML = now.getDate();

setInterval(setTime, 1000);
