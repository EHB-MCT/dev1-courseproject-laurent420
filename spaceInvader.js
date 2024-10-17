"use strict";
let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

spaceinvader();

function spaceinvader() {
  context.beginPath();
  context.fillStyle = "black";
  context.rect(50, 50, 300, 300);
  context.fill();

  context.beginPath();
  context.fillStyle = "#39FF14";
  context.rect(75, 125, 100, 50);
  context.fill();

  context.beginPath();
  context.fillStyle = "#39FF14";
  context.rect(225, 125, 100, 50);
  context.fill();

  context.beginPath();
  context.fillStyle = "#39FF14";
  context.rect(75, 225, 250, 50);
  context.fill();

  context.beginPath();
  context.fillStyle = "#39FF14";
  context.rect(175, 275, 50, 50);
  context.fill();
}
