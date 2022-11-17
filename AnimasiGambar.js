var x = 0;
var y = 0;

setInterval(function(){

  x -= 119;
  if (x == -364){
    x = 0;
    y -= 120;

  } else {

    if(y == -362)
    {
      y = 0;
    }
}

document.getElementById('stiker').style.backgroundPositionX = String(x) + "px";
document.getElementById('stiker').style.backgroundPositionY = String(y) + "px";

}, 3000 );