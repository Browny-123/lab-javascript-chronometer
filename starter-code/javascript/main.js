var chronometer = new Chronometer();
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var minDec = document.getElementById("minDec");
var minUni = document.getElementById("minUni");
var secDec = document.getElementById("secDec");
var secUni = document.getElementById("secUni");
var milDec = document.getElementById("milDec");
var milUni = document.getElementById("milUni");
var splitList = document.getElementById("splits");
function printTime() {
  printMinutes();
  printSeconds();
  printMilliseconds();
}

function printMinutes() {
  const s = chronometer.twoDigitsNumber(chronometer.getMinutes());
  minDec.textContent = s[0];
  minUni.textContent = s[1];
}

function printSeconds() {
  setInterval(() => {
    const r = chronometer.twoDigitsNumber(chronometer.getSeconds());
    secUni.textContent = r[1];
    secDec.textContent = r[0];
  }, 10);
}

function printMilliseconds() {
  const m = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  milDec.textContent = m[0];
  milUni.textContent = m[1];
}

function printSplit() {
  var node = document.createElement("li");
  let min = chronometer.twoDigitsNumber(chronometer.getMinutes());
  let sec = chronometer.twoDigitsNumber(chronometer.getSeconds());
  let milliSec = chronometer.twoDigitsNumber(chronometer.getMilliseconds());
  splitList.appendChild(node).textContent = `${min}:${sec}:${milliSec}`;
}

function clearSplits() {
  splitList.innerHTML = "";
}

function setStopBtn() {
  btnLeft.className = "btn stop";
  btnLeft.innerHTML = "STOP";
}

function setSplitBtn() {
  btnRight.className = "btn split";
  btnRight.innerHTML = "SPLIT";
}

function setStartBtn() {
  btnLeft.className = "btn start";
  btnLeft.innerHTML = "START";
}

function setResetBtn() {
  btnRight.className = "btn reset";
  btnRight.innerHTML = "RESET";
}

// Start/Stop Button
btnLeft.addEventListener("click", function() {
  if (btnLeft.className === "btn start") {
    setStopBtn();
    setSplitBtn();
    chronometer.startClick();
    printTime();
  } else {
    setStartBtn();
    setResetBtn();
    chronometer.stopClick();
  }
});

// Reset/Split Button
btnRight.addEventListener("click", function() {
  if (btnRight.className === "btn split") {
    printSplit();
  } else {
    chronometer.resetClick();
    printTime();
    clearSplits();
  }
});
