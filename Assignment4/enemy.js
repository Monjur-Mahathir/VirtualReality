"use strict";

function Enemy(context, x, y, speed)
{
  this.x = x;
  this.y = y;
  this.context = context;
  this.speed = speed;
  this.size = 70;
}

Enemy.prototype.update = function(h, w){
  if(this.y + this.speed > h){
    this.y = 10;
    this.x = Math.floor(Math.random()*(w-this.size))
  }
  else{
    this.y += this.speed;
  }
}

Enemy.prototype.Destroy = function(w){
  this.x = Math.floor(Math.random()*(w-this.size));
  this.y = 10;
}

Enemy.prototype.getCoords = function(){
  return {
    'X': this.x,
    'Y': this.y
  };
}

Enemy.prototype.draw = function(lag_leftover){
  this.context.save();
  this.context.translate(this.x + this.speed * lag_leftover, this.y + this.speed * lag_leftover);
  this.context.beginPath();
  this.context.moveTo(0, 0);
  this.context.lineTo(this.size, 0);
  this.context.lineWidth = 5;
  this.context.strokeStyle = "red";
  this.context.stroke();
  this.context.restore();
}
