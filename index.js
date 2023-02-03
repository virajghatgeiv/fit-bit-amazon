const watch = document.getElementById("watch-img");

const red = document.getElementById("red");
const black = document.getElementById("black");
const purple = document.getElementById("purple");
const brown = document.getElementById("brown");
const heartRate = document.getElementById("heartRate");
const time = document.getElementById("time-btn");
const t = document.getElementById("time");
const h = document.getElementById("heart");
const r = document.getElementById("text");
const date = new Date();
t.innerHTML = date.toLocaleTimeString("en-us");

black.addEventListener("click",()=>{
 watch.src ="assets/blackwatch.png"
});

red.addEventListener("click",()=>{
 watch.src ="assets/redwatch.png"
});

purple.addEventListener("click",()=>{
 watch.src ="assets/purplewatch.png"
});

brown.addEventListener("click",()=>{
 watch.src ="assets/brownwatch.png"
});

heartRate.addEventListener("click",()=>{
  h.style.display = "block";
  r.style.display = "block";
  t.style.display = "none";
});

time.addEventListener("click",()=>{
  const tim = new Date();
  t.style.display = "block";
  t.innerHTML = tim.toLocaleTimeString("en-us");
  h.style.display = "none";
  r.style.display = "none";

});