"use strict";

function Player(context, player_x, player_y)
{
  this.x = player_x;
  this.y = player_y;

  this.context = context;
  this.size = 100;
  this.speed = 1.5;

  this.bullet_Xs = [];
  this.bullet_Ys = [];
}

Player.prototype.fire = function(){
  this.bullet_Xs.push(this.x+this.size/2);
  this.bullet_Ys.push(this.y);
}

Player.prototype.update = function(){
  var delete_list = [];

  for(var i=0; i<this.bullet_Ys.length; i++){
    if(this.bullet_Ys[i] == -1 || this.bullet_Xs[i] == -1)continue;
    if(this.bullet_Ys[i] - this.speed < 0)delete_list.push(i);
    else this.bullet_Ys[i] -= this.speed;
  }

  for(var i=0; i<delete_list.length; i++){
    this.bullet_Xs[delete_list[i]] = -1;
    this.bullet_Ys[delete_list[i]] = -1;
  }

}

Player.prototype.getBullets = function(){
  return{
    'Xs': this.bullet_Xs,
    'Ys':this.bullet_Ys
  };
}

Player.prototype.destroyBullet = function(index){
   this.bullet_Xs[index] = -1;
   this.bullet_Ys[index] = -1;
}

Player.prototype.drawBullet = function(x, y, lag_leftover){
  this.context.save();
  this.context.translate(x + this.speed * lag_leftover, y + this.speed * lag_leftover);
  this.context.beginPath();
  this.context.moveTo(0, 0);
  this.context.lineTo(0, -10);
  this.context.lineWidth = 5;
  this.context.strokeStyle = "black";
  this.context.stroke();
  this.context.restore();
}

Player.prototype.incX = function(m, w){
  if((this.x + this.size) < (w - m))this.x = this.x + m;
}

Player.prototype.incY = function(m, h){
  if(this.y < (h - m))this.y = this.y + m;
}

Player.prototype.decX = function(m){
  if(this.x > m)this.x = this.x - m;
}

Player.prototype.decY = function(m){
  if(this.y > m)this.y = this.y - m;
}

Player.prototype.draw = function(lag_leftover){
  this.context.save();
  this.context.translate(this.x, this.y);
  this.context.beginPath();
  this.context.moveTo(0, 0);
  this.context.lineTo(this.size, 0);
  this.context.lineWidth = 5;
  this.context.strokeStyle = "black";
  this.context.stroke();
  this.context.restore();

  for(var i=0; i<this.bullet_Xs.length; i++){
    if(this.bullet_Xs[i] != -1 && this.bullet_Ys[i] != -1)this.drawBullet(this.bullet_Xs[i], this.bullet_Ys[i], lag_leftover);
  }
}
