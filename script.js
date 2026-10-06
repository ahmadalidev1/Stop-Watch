const startBtn = document.querySelector(".start");
const pauseBtn = document.querySelector(".pause");
const resetBtn = document.querySelector(".reset");
const para = document.querySelector(".para");
const dot = document.querySelector(".inner-circle");

let seconds = 0;
let timer = null;

function updateTime() {
  let hours = Math.floor(seconds / 3600);
  let min = Math.floor((seconds % 3600) / 60);
  let sec = Math.floor(seconds % 60);

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (min < 10) {
    min = "0" + min;
  }

  if (sec < 10) {
    sec = "0" + sec;
  }

  para.innerHTML = `${hours}:${min}:${sec}`;
}

startBtn.addEventListener("click", () => {
  if (timer !== null) return;

  timer = setInterval(() => {
    seconds++;
    updateTime();
  }, 1000);

  dot.style.animation = "rotate 1s linear infinite";
  dot.style.animationPlayState = "running";


  startBtn.style.display = "none";
  pauseBtn.style.display = "inline-block";
});

pauseBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;

  dot.style.animationPlayState = "paused";

  pauseBtn.style.display = "none";
  startBtn.style.display = "inline-block";
});

resetBtn.addEventListener("click", () => {
  clearInterval(timer);
  timer = null;
  seconds = 0;
  updateTime();

  dot.style.animationPlayState = "paused";

  pauseBtn.style.display = "none";
  startBtn.style.display = "inline-block";
});


// =

// startBtn.addEventListener("click", () => {

//   dot.style.animation = "rotate 1s linear infinite"
//   if (timer !== null) return;

//   timer = setInterval(() => {
//     count++;

//     let hours = 0;
//     let minutes = 0;
//     let seconds = count;

//     while (seconds >= 3600) {
//       hours++;
//       seconds -= 3600;
//     }

//     while (seconds >= 60) {
//       minutes++;
//       seconds -= 60;
//     }

//     let h = hours;
//     let m = minutes;
//     let s = seconds;

//     if (h < 10) h = "0" + h;
//     if (m < 10) m = "0" + m;
//     if (s < 10) s = "0" + s;

//     para.innerHTML = `${h}:${m}:${s}`;
//     startBtn.style.display= "none"
//     pauseBtn.style.display= "inline-block"


//   }, 1000);
// });


// pauseBtn.addEventListener("click", () => {
//   clearInterval(timer)
//   startBtn.style.display= "inline-block"
//   pauseBtn.style.display = "none"
//   dot.style.animation = "none"
// })


