const colorOne = document.querySelector(".color1");
const colorTwo = document.querySelector(".color2");
const randomBtn = document.querySelector(".random-button");
const body = document.querySelector("body");
const css = document.querySelector("h5");

function randomColor() {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return "#" + n.slice(0, 6);
}

function setGradient() {
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
  css.textContent = body.style.background + ";";
}

function feelingLucky() {
  colorOne.value = randomColor();
  colorTwo.value = randomColor();
  body.style.background = `linear-gradient(to right, ${colorOne.value}, ${colorTwo.value})`;
  css.textContent = body.style.background + ";";
}

function onLoadColor() {
  feelingLucky();
}

colorOne.addEventListener("input", setGradient);
colorTwo.addEventListener("input", setGradient);
randomBtn.addEventListener("click", feelingLucky);
