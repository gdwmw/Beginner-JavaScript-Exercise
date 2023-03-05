const heading = document.querySelector("#heading");
heading.setAttribute("class", "heading");
heading.innerHTML = "Beginner JavaScript Exercise";
// console.log(heading.getAttribute("class"));
heading.setAttribute("style", "color: red;");
heading.style.color = "black";

const para = document.querySelector("#para");
para.setAttribute("class", "para");
para.innerHTML =
  "Belajar dasar Bahasa Pemrograman JavaScript, DOM, Asynchronous, AJAX, dan API.";
// console.log(para.getAttribute("id"));

const img = document.querySelector("#jsimg");
img.setAttribute("class", "jsimg");
img.src = "public/favicon.svg";
// console.log(img.getAttribute("src"));

const cLine = document.querySelector("#color-line");
cLine.setAttribute(
  "style",
  "background-color: black; height: 2px; width: 100px; display: block; margin: 0 auto;"
);
cLine.setAttribute("class", "color-line");
cLine.classList.add("add-class");
