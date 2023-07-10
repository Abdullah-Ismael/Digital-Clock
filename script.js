const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updataClock() {
  // Get date now
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";
  // Check if hours > 12
  if (h > 12) {
    h -= 12;
    ampm = "PM";
  }
  // Add 0
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  // Change inner text Clock element to date now
  hours.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampmEl.innerText = ampm;
}
// update the value after every 1s
setInterval(() => {
  updataClock();
}, 1000);
