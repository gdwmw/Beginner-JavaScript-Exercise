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

const winnersP1 = document.createElement("p");
winnersP1.setAttribute("class", "mt-1 h-10 font-semibold text-2xl text-center");
function fWinP1() {
  if (gameOver === true) {
    if (scoreP1 === target) {
      winnersP1.classList.add("text-green-500");
      winnersP1.innerHTML = "WINNER";
    } else {
      winnersP1.classList.add("text-red-500");
      winnersP1.innerHTML = "LOSE";
    }
  }
}

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

const winnersP2 = document.createElement("p");
winnersP2.setAttribute("class", "mt-1 h-10 font-semibold text-2xl text-center");
function fWinP2() {
  if (gameOver === true) {
    if (scoreP2 === target) {
      winnersP2.classList.add("text-green-500");
      winnersP2.innerHTML = "WINNER";
    } else {
      winnersP2.classList.add("text-red-500");
      winnersP2.innerHTML = "LOSE";
    }
  }
}

//----------------------------

const button = document.getElementById("button");
button.setAttribute("class", "flex items-center justify-center");

const btnP1 = document.createElement("button");
btnP1.setAttribute(
  "class",
  "mr-2 px-3 py-2 border-2 border-amber-400 hover:border-white hover:text-white rounded-lg bg-amber-400 font-semibold"
);
btnP1.innerHTML = "KEY - ','<br>PLAYER 1<br>(+1)";
window.addEventListener("keydown", (e) => {
  if (e.key === ",") {
    if (!gameOver) {
      scoreP1 += 1;
      if (scoreP1 === target) {
        gameOver = true;
      }
      h1P1.innerHTML = scoreP1;
    }
    fWinP1();
    fWinP2();
  }
});
btnP1.addEventListener("click", () => {
  if (!gameOver) {
    scoreP1 += 1;
    if (scoreP1 === target) {
      gameOver = true;
    }
    h1P1.innerHTML = scoreP1;
  }
  fWinP1();
  fWinP2();
});

//----------------------------

const btnP2 = document.createElement("button");
btnP2.setAttribute(
  "class",
  "ml-2 px-3 py-2 border-2 border-amber-400 hover:border-white hover:text-white rounded-lg bg-amber-400 font-semibold"
);
btnP2.innerHTML = "KEY - '.'<br>PLAYER 2<br>(+1)";
window.addEventListener("keydown", (e) => {
  if (e.key === ".") {
    if (!gameOver) {
      scoreP2 += 1;
      if (scoreP2 === target) {
        gameOver = true;
      }
      h1P2.innerHTML = scoreP2;
    }
    fWinP1();
    fWinP2();
  }
});
btnP2.addEventListener("click", () => {
  if (!gameOver) {
    scoreP2 += 1;
    if (scoreP2 === target) {
      gameOver = true;
    }
    h1P2.innerHTML = scoreP2;
  }
  fWinP1();
  fWinP2();
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
  winnersP1.setAttribute(
    "class",
    "mt-1 h-10 font-semibold text-2xl text-center"
  );
  winnersP2.setAttribute(
    "class",
    "mt-1 h-10 font-semibold text-2xl text-center"
  );
  winnersP1.innerHTML = "";
  winnersP2.innerHTML = "";
}
window.addEventListener("keydown", (e) => {
  if (e.key === " ") {
    fReset();
  }
});
btnReset.addEventListener("click", fReset);
btnReset.innerHTML = "KEY - 'Space'<br>RESET";

//----------------------------

const targetChange = document.getElementById("target");
targetChange.addEventListener("change", () => {
  target = parseInt(targetChange.value);
  fReset();
});

//----------------------------

boxSp1.append(h1P1);
labelP1.append(lValueP1, boxSp1, winnersP1);

boxSp2.append(h1P2);
labelP2.append(lValueP2, boxSp2, winnersP2);

boxSp2.append(h1P2);
score.append(labelP1, vs, labelP2);

button.append(btnP1, btnP2);

reset.append(btnReset);
