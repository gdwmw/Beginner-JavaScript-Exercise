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

//-----IMAGE 02-----
const img02 = document.querySelector("#img02");
img02.setAttribute(
  "style",
  "column-count: 5; margin: 30px 0 0 0; display: block;"
);
for (let i = 1; i <= 15; i++) {
  const setimg02 = document.createElement("img");
  setimg02.setAttribute("src", "public/favicon.svg");
  setimg02.setAttribute(
    "style",
    "width: 100px; height: auto; display: block; margin: 0 auto;"
  );
  const span = document.createElement("span");
  span.innerHTML = `#${i}`;
  span.setAttribute("style", "display: block; text-align: center;");
  img02.appendChild(setimg02);
  img02.appendChild(span);
}
//-----END OF IMAGE 02-----

//-----BUTTON 01-----
const btn03 = document.querySelector("#btn03");
btn03.setAttribute("style", "display: block; margin: 30px auto 0 auto;");
btn03.addEventListener("click", fBtn03);
function fBtn03() {
  if (img02.style.display == "none") {
    img02.setAttribute(
      "style",
      "column-count: 5; margin: 30px 0 0 0; display: block;"
    );
  } else {
    img02.setAttribute(
      "style",
      "column-count: 5; margin: 30px 0 0 0; display: none;"
    );
  }
}
//-----END OF BUTTON 01-----
