function drawTank(x, y){

  ctx.beginPath();
  ctx.rect(x, y, tank.width, tank.height);
  ctx.fillStyle = "#36643A";
  ctx.fill();
  ctx.closePath();
  ctx.beginPath(); noselH = tank.height * 0.1; noselW = tank.width * 0.35;
  ctx.rect(tank.width + x, y + tank.height/2 - noselH/2, noselW, noselH);
  ctx.fillStyle = "#342F29";
  ctx.fill();
  ctx.closePath();

  if(tank.fire){
    ctx.beginPath();
    ctx.rect(tank.fireXY[0], tank.fireXY[1], 5, 5);
    ctx.fillStyle = "black";
    ctx.fill();
    ctx.closePath();
    if(tank.mouthDirection==="right") tank.fireXY[0]++;
    else if(tank.mouthDirection==="left") tank.fireXY[0]--;
    else if(tank.mouthDirection==="up") tank.fireXY[1]--;
    else if(tank.mouthDirection==="down") tank.fireXY[1]++;
  }
}

function directionChange(direction){
  if(direction === 'left'){
    var temp = [tank.XY[0],tank.XY[1]];
    tank.XY = [temp[1],temp[0]];
  }
  tank.mouthDirection = direction;
}

$('#canvas').css('background-color','#5C4747');

function draw() {
  eventHandlers();
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawTank(tank.XY[0],tank.XY[1]);
  requestAnimationFrame(draw);
};
draw();
