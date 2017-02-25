function drawTank(x, y){
  ctx.beginPath();
  ctx.rect(0, 0, tank.height, tank.width);
  ctx.fillStyle = "#36643A";
  ctx.fill();
  ctx.closePath();
}

$('#canvas').css('background-color','#5C4747');

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTank(0,0);
  requestAnimationFrame(draw);
};
draw();
