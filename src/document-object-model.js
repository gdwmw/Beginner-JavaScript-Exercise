//-----TITLE-----
const judul01 = document.querySelector("#judul01");
judul01.innerHTML = "Beginner JavaScript Exercise";

const p01 = document.querySelector("#p01");
p01.innerHTML =
  "Latihan Bahasa Pemrograman JavaScript, DOM, Asynchronous, AJAX, dan API.";
//-----END OF TITLE-----

//-----BLACK LINE-----
const cLine = document.querySelectorAll("#color-line");
cLine.forEach((line) => {
  line.setAttribute(
    "style",
    "background-color: black; height: 2px; width: 100px; display: block; margin: 0 auto;"
  );
  line.setAttribute("class", "color-line");
});
//-----END OF BLACK LINE-----

//-----GENERATE COLOR-----
const generateColor = document.querySelector("#generate-color");
generateColor.setAttribute(
  "style",
  "display: block; margin: 30px auto 0 auto;"
);
generateColor.addEventListener("click", fGenerateColor);
generateColor.addEventListener("click", addStyle);
function fGenerateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return `rgb(${r}, ${g}, ${b})`;
}
function addStyle() {
  document.body.style.backgroundColor = fGenerateColor();
  const rgbDetail = document.querySelector("#rgb-detail");
  rgbDetail.setAttribute("style", "text-align: center;");
  const detail = fGenerateColor();
  rgbDetail.innerHTML = `${detail}`;
}
//-----END OF GENERATE COLOR-----

//-----IMAGE 01-----
const img01 = document.querySelector("#img01");
img01.src = "public/favicon.svg";
img01.setAttribute("class", "img01");
img01.setAttribute("style", "display: block;");
function fBtn01() {
  if (img01.style.display == "none") {
    img01.setAttribute("style", "display: block;");
  } else {
    img01.setAttribute("style", "display: none;");
  }
}
//-----END OF IMAGE 01-----

//-----BUTTON 01-----
const btn01 = document.querySelector("#btn01");
btn01.setAttribute("style", "display: block; margin: 30px auto 0 auto;");
//-----END OF BUTTON 01-----

//-----BUTTON 02-----
const btn02 = document.querySelector("#btn02");
btn02.setAttribute("style", "display: block; margin: 30px auto 0 auto;");
btn02.addEventListener("click", fBtn01);
btn02.addEventListener("click", fBtn03);
//-----END OF BUTTON 02-----

//-----BUTTON 03-----
const btn03 = document.querySelector("#btn03");
btn03.setAttribute("style", "display: block; margin: 30px auto 0 auto;");
btn03.addEventListener("click", fBtn03);
function fBtn03() {
  if (color.style.display == "none") {
    color.style.display = "block";
  } else {
    color.style.display = "none";
  }
}
//-----END OF BUTTON 03-----

//-----COLOR-----
const color = document.querySelector("#color");
color.setAttribute(
  "style",
  "column-count: 5; margin: 30px 0 0 0; display: block;"
);
const setColorBtn = document.querySelectorAll(".btncolor");
setColorBtn.forEach((btnColor) => {
  btnColor.setAttribute(
    "style",
    "height: 100px; width: 100px; display: block; margin: 0 auto; border-radius: 0px;"
  );
  btnColor.innerHTML = "Click Me!";
  btnColor.addEventListener("click", changeColor);
  // setInterval(() => {
  //   changeColor();
  // }, 1000);
  function changeColor() {
    btnColor.style.backgroundColor = fGenerateColor();
    btnColor.style.borderColor = fGenerateColor();
    btnColor.style.color = fGenerateColor();
  }
});
const span = document.querySelectorAll(".spancolor");
span.forEach((spanColor) => {
  spanColor.setAttribute(
    "style",
    "display: block; text-align: center; margin: 10px 0;"
  );
});
//-----END OF COLOR-----

// setInterval(() => {
//   addStyle();
// }, 1000);

//-----KEY DOWN & KEY UP-----
const keyUpDown = document.querySelector("input");
keyUpDown.setAttribute("style", "display: block; margin: 20px auto 0 auto;");
keyUpDown.addEventListener("keydown", (e) => {
  const keyDetail = document.querySelector("#keydetail");
  return (keyDetail.innerHTML = `Key Down - ${e.key}`);
});
keyUpDown.addEventListener("keyup", (e) => {
  const keyDetail = document.querySelector("#keydetail");
  return (keyDetail.innerHTML = `Key Up - ${e.key}`);
});
//-----END OF KEY DOWN & KEY UP-----

//-----FORM-----
const form = document.querySelector("#form");
const input = document.querySelector("#noteInput");
const list = document.querySelector("#notes");

// input.addEventListener("change", (e) => {
//   console.log("Ada Perubahan!");
// });

input.addEventListener("input", (e) => {
  document.querySelector("#h3").innerText = input.value;
  console.log("Ada Input!");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const noteValue = input.value;
  const newList = document.createElement("li");
  newList.innerText = noteValue;
  list.append(newList);
  input.value = " ";
});
//-----END OF FORM-----
