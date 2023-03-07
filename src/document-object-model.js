const heading = document.querySelector("#heading");
heading.setAttribute("class", "heading");
heading.innerHTML = "Beginner JavaScript Exercise";
// console.log(heading.getAttribute("class"));
heading.setAttribute("style", "color: red;");
heading.style.color = "black";

const para = document.querySelector("#para");
para.setAttribute("class", "para");
para.innerHTML =
  "Latihan Bahasa Pemrograman JavaScript, DOM, Asynchronous, AJAX, dan API.";
// console.log(para.getAttribute("id"));

const img = document.querySelector("#jsimg");
img.setAttribute("class", "jsimg");
img.src = "public/favicon.svg";
// console.log(img.getAttribute("src"));

const cLine = document.querySelectorAll("#color-line");
cLine.forEach((line) => {
  line.setAttribute(
    "style",
    "background-color: black; height: 2px; width: 100px; display: block; margin: 0 auto;"
  );
  line.setAttribute("class", "color-line");
  line.classList.add("add-class");
});

const gambar = document.querySelector("#gambar");
gambar.setAttribute("style", "column-count: 5;");
for (let i = 1; i <= 15; i++) {
  const newGambar = document.createElement("img");
  newGambar.setAttribute("class", "margin");
  newGambar.setAttribute("src", "public/favicon.svg");
  newGambar.setAttribute(
    "style",
    "width: 100px; height: auto; display: block; margin: 0 auto;"
  );
  gambar.appendChild(newGambar);
}
