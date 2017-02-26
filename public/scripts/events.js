
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.keyCode == 32) {
        spacePressed = true;
    }
    else if(e.keyCode == 39) {
        rightPressed = true;
    }
    else if(e.keyCode == 37) {
        leftPressed = true;
    }
    else if(e.keyCode == 38) {
        upPressed = true;
    }
    else if(e.keyCode == 40) {
        downPressed = true;
    }
    else if(e.keyCode == 27) {
      if (debug) console.log("escape pressed");
      // gameState = "paused";
      // escapePressed = true;
    }
    else if(e.keyCode == 13) {
      // if (debug) console.log("enter pressed");
      // if (gameState == "paused") gameState = "active";
      // escapePressed = false;
    }
}
function keyUpHandler(e) {
    if(e.keyCode == 39) {
        rightPressed = false;
    }
    else if(e.keyCode == 37) {
        leftPressed = false;
    }
    else if(e.keyCode == 38) {
        upPressed = false;
    }
    else if(e.keyCode == 40) {
        downPressed = false;
    }
    else if(e.keyCode == 32) {
        spacePressed = false;
    }
}
function mouseMoveHandler(e) {

}

function eventHandlers(){
  if(leftPressed){
    // if(tank.mouthDirection === 'left')
    tank.XY[0]--;
    // else{
    //   directionChange("left");
    // }
  }
  if(rightPressed) tank.XY[0]++;
  if(upPressed) tank.XY[1]--;
  if(downPressed) tank.XY[1]++;
  if(spacePressed){
    console.log('space');
    tank.fire = true;
    tank.fireXY = [0,0];
  }
}
