const counter = document.getElementsByClassName("counter")[0];
const followers = document.getElementsByClassName("followers")[0];

// const counter = document.querySelector(".counter");
// const followers = document.querySelector(".followers");

var count = 1;

setInterval(() => {
  if (count <= 1000) {
    counter.innerHTML = count;
    count++;
  }
}, 1);

setTimeout(() => {
  followers.innerHTML = "Followers on Instagram";
}, 5000);
