const selectBox = document.querySelector(".select-box"),
  selectBtnX = selectBox.querySelector(".options .playerX"),
  selectBtnO = selectBox.querySelector(".options .playerO"),
  playBoard = document.querySelector(".play-board"),
  players = document.querySelector(".players"),
  allBox = document.querySelectorAll("section span"),
  resultBox = document.querySelector(".result-box"),
  wonText = resultBox.querySelector(".won-text"),
  replayBtn = resultBox.querySelector("button");

window.onload = () => {
  for (let i = 0; i < allBox.length; i++) {
    allBox[i].setAttribute("onclick", "clickedBox(this)");
  }
};

selectBtnX.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
};

selectBtnO.onclick = () => {
  selectBox.classList.add("hide");
  playBoard.classList.add("show");
  players.setAttribute("class", "players active player");
};

let playerXIcon = "fas fa-times",
  playerOIcon = "far fa-circle",
  playerSign = "X",
  runBot = true;

function clickedBox(element) {
  if (players.classList.contains("player")) {
    playerSign = "O";
    element.innerHTML = `<i class="${playerOIcon}"></i>`;
    players.classList.remove("active");
    element.setAttribute("id", playerSign);
  } else {
    element.innerHTML = `<i class="${playerXIcon}"></i>`;
    element.setAttribute("id", playerSign);
    players.classList.add("active");
  }
  selectWinner();
  element.style.pointerEvents = "none";
  playBoard.style.pointerEvents = "none";
  let randomTimeDelay = ((Math.random() * 1000) + 200).toFixed();
  setTimeout(() => {
    bot(runBot);
  }, randomTimeDelay);
}

function bot() {
  let array = [];
  if (runBot) {
    playerSign = "O";
    for (let i = 0; i < allBox.length; i++) {
      if (allBox[i].childElementCount == 0) {
        array.push(i);
      }
    }
    let randomBox = array[Math.floor(Math.random() * array.length)];
    if (array.length > 0) {
      if (players.classList.contains("player")) {
        playerSign = "X";
        allBox[randomBox].innerHTML = `<i class="${playerXIcon}"></i>`;
        allBox[randomBox].setAttribute("id", playerSign);
        players.classList.add("active");
      } else {
        allBox[randomBox].innerHTML = `<i class="${playerOIcon}"></i>`;
        players.classList.remove("active");
        allBox[randomBox].setAttribute("id", playerSign);
      }
      selectWinner();
    }
    allBox[randomBox].style.pointerEvents = "none";
    playBoard.style.pointerEvents = "auto";
    playerSign = "X";
  }
}

function getIdVal(classname) {
  return document.querySelector(".box" + classname).id;
}

function checkIdSign(val1, val2, val3, val4, val5, sign) {
  return (
    getIdVal(val1) == sign &&
    getIdVal(val2) == sign &&
    getIdVal(val3) == sign &&
    getIdVal(val4) == sign &&
    getIdVal(val5) == sign
  );
}

function selectWinner() {
  for (let i = 0; i < allBox.length; i++) {
    const box = allBox[i];
    if (box.getAttribute("id") == "") {
      box.style.pointerEvents = "none";
      box.style.cursor = "not-allowed";
    }
  }
  if (
    checkIdSign(1, 2, 3, 4, 5, playerSign) ||
    checkIdSign(6, 7, 8, 9, 10, playerSign) ||
    checkIdSign(11, 12, 13, 14, 15, playerSign) ||
    checkIdSign(16, 17, 18, 19, 20, playerSign) ||
    checkIdSign(21, 22, 23, 24, 25, playerSign) ||
    checkIdSign(1, 6, 11, 16, 21, playerSign) ||
    checkIdSign(2, 7, 12, 17, 22, playerSign) ||
    checkIdSign(3, 8, 13, 18, 23, playerSign) ||
    checkIdSign(4, 9, 14, 19, 24, playerSign) ||
    checkIdSign(5, 10, 15, 20, 25, playerSign) ||
    checkIdSign(1, 7, 13, 19, 25, playerSign) ||
    checkIdSign(5, 9, 13, 17, 21, playerSign)
  ) {
    runBot = false;
    bot(runBot);
    setTimeout(() => {
      resultBox.classList.add("show");
      playBoard.classList.remove("show");
    }, 700);
    wonText.innerHTML = `Player <p>${playerSign}</p> won the game!`;
  } else {
    if (
      getIdVal(1) != "" &&
      getIdVal(2) != "" &&
      getIdVal(3) != "" &&
      getIdVal(4) != "" &&
      getIdVal(5) != "" &&
      getIdVal(6) != "" &&
      getIdVal(7) != "" &&
      getIdVal(8) != "" &&
      getIdVal(9) != "" &&
      getIdVal(10) != "" &&
      getIdVal(11) != "" &&
      getIdVal(12) != "" &&
      getIdVal(13) != "" &&
      getIdVal(14) != "" &&
      getIdVal(15) != "" &&
      getIdVal(16) != "" &&
      getIdVal(17) != "" &&
      getIdVal(18) != "" &&
      getIdVal(19) != "" &&
      getIdVal(20) != "" &&
      getIdVal(21) != "" &&
      getIdVal(22) != "" &&
      getIdVal(23) != "" &&
      getIdVal(24) != "" &&
      getIdVal(25) != ""
    ) {
      runBot = false;
      bot(runBot);
      setTimeout(() => {
        resultBox.classList.add("show");
        playBoard.classList.remove("show");
      }, 700);
      wonText.textContent = "Match has been drawn!";
    }
  }
}

replayBtn.onclick = () => {
  window.location.reload();
};
