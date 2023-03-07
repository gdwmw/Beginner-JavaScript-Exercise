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

const cLine = document.querySelectorAll("#color-line");
cLine.forEach((line) => {
  line.setAttribute(
    "style",
    "background-color: black; height: 2px; width: 100px; display: block; margin: 0 auto;"
  );
  line.setAttribute("class", "color-line");
  line.classList.add("add-class");
});

const img = document.querySelector("#jsimg");
img.setAttribute("class", "jsimg");
img.src = "public/favicon.svg";
img.setAttribute("style", "display: block;");
function fHU() {
  if (img.style.display == "none") {
    img.setAttribute("style", "display: block;");
  } else {
    img.setAttribute("style", "display: none;");
  }
}

const hU = document.querySelector("#HU");
hU.setAttribute("style", "display: block; margin: 30px auto 0 auto;");

const gambar = document.querySelector("#gambar");
gambar.setAttribute("style", "column-count: 5; margin: 30px 0 0 0 ");
for (let i = 1; i <= 15; i++) {
  const newGambar = document.createElement("img");
  newGambar.setAttribute("class", "margin");
  newGambar.setAttribute("src", "public/favicon.svg");
  newGambar.setAttribute(
    "style",
    "width: 100px; height: auto; display: block; margin: 0 auto;"
  );
  const span = document.createElement("span");
  span.innerHTML = `#${i}`;
  span.setAttribute("style", "display: block; text-align: center;");
  gambar.appendChild(newGambar);
  gambar.appendChild(span);
}
