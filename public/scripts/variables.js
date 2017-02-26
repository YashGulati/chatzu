
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var leftPressed = false;
var rightPressed = false;
var upPressed = false;
var downPressed = false;
var spacePressed = false;

var noselH;
var noselW;

var x = 10;
var tank = {
  XY: [10,10],
  height: 25,
  width: 25,
  mouthDirection: "right",
  fire: false,
  fireXY: [0,0]
};
