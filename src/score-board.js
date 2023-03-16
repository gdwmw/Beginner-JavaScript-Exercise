const body = document.querySelector("body");
body.setAttribute("class", "bg-slate-800");

//----------------------------

let scoreP1 = 0;
let scoreP2 = 0;
let target = 5;
let gameOver = false;

//----------------------------

const score = document.getElementById("score");
score.setAttribute("class", "my-20 flex items-center justify-center");

const labelP1 = document.createElement("div");
const lValueP1 = document.createElement("p");
lValueP1.setAttribute(
  "class",
  "mb-2 text-center text-white text-xl font-semibold"
);
lValueP1.innerText = "PLAYER 1";

const boxSp1 = document.createElement("div");
boxSp1.setAttribute(
  "class",
  "w-40 h-40 bg-black rounded-xl flex items-center justify-center"
);
const h1P1 = document.createElement("h1");
h1P1.setAttribute("class", "text-8xl text-white");
h1P1.innerHTML = scoreP1;

//----------------------------

const vs = document.createElement("h1");
vs.setAttribute("class", "px-28 text-8xl text-white");
vs.innerText = "VS";

//----------------------------
const labelP2 = document.createElement("div");
const lValueP2 = document.createElement("p");
lValueP2.setAttribute(
  "class",
  "mb-2 text-center text-white text-xl font-semibold"
);
lValueP2.innerText = "PLAYER 2";

const boxSp2 = document.createElement("div");
boxSp2.setAttribute(
  "class",
  "w-40 h-40 bg-black rounded-xl flex items-center justify-center"
);
const h1P2 = document.createElement("h1");
h1P2.setAttribute("class", "text-8xl text-white");
h1P2.innerHTML = scoreP2;

//----------------------------

const button = document.getElementById("button");
button.setAttribute("class", "flex items-center justify-center");

const btnP1 = document.createElement("button");
btnP1.setAttribute(
  "class",
  "mr-2 px-3 py-2 border-2 border-amber-400 hover:border-white hover:text-white rounded-lg bg-amber-400 font-semibold"
);
btnP1.innerHTML = "PLAYER 1<br>(+1)";
btnP1.addEventListener("click", () => {
  if (!gameOver) {
    scoreP1 += 1;
    if (scoreP1 == target) {
      gameOver = true;
    }
    h1P1.innerHTML = scoreP1;
  }
});

//----------------------------

const btnP2 = document.createElement("button");
btnP2.setAttribute(
  "class",
  "ml-2 px-3 py-2 border-2 border-amber-400 hover:border-white hover:text-white rounded-lg bg-amber-400 font-semibold"
);
btnP2.innerHTML = "PLAYER 2<br>(+1)";
btnP2.addEventListener("click", () => {
  if (!gameOver) {
    scoreP2 += 1;
    if (scoreP2 == target) {
      gameOver = true;
    }
    h1P2.innerHTML = scoreP2;
  }
});

//----------------------------

const reset = document.getElementById("reset");
reset.setAttribute("class", "flex items-center justify-center");

const btnReset = document.createElement("button");
btnReset.setAttribute(
  "class",
  "mt-2 px-20 py-2 border-2 border-amber-400 hover:border-white hover:text-white rounded-lg bg-amber-400 font-semibold"
);
function fReset() {
  scoreP1 = 0;
  scoreP2 = 0;
  h1P1.innerHTML = scoreP1;
  h1P2.innerHTML = scoreP2;
  gameOver = false;
}
btnReset.addEventListener("click", fReset);
btnReset.innerHTML = "RESET";

//----------------------------

const targetChange = document.getElementById("target");
targetChange.addEventListener("change", () => {
  target = parseInt(targetChange.value);
  fReset();
});

//----------------------------

boxSp1.append(h1P1);
labelP1.append(lValueP1, boxSp1);

boxSp2.append(h1P2);
labelP2.append(lValueP2, boxSp2);

boxSp2.append(h1P2);
score.append(labelP1, vs, labelP2);

button.append(btnP1, btnP2);

reset.append(btnReset);
