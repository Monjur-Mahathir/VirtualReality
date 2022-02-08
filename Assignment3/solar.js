"use strict";

function Planet(context, x, y, nPlanet, scale, colors)
{
  this.cx = x;
  this.cy = y;
  this.colors = colors;
  this.scale = scale;
  this.velocityX = Math.random()*2 - 1;
	this.velocityY = Math.random()*2 - 1;
  this.numPlanets = nPlanet;
  this.context = context;
  this.sunRad = 20;
  this.planetRad = 10;
  this.circularMotion = [];
  for(var i=1; i<=this.numPlanets; i++){
    var motion = Math.random();
    this.circularMotion.push(motion);
  }
  this.motionIncrease = [];
  this.initialIncrease = 0.02;
  for(var i=1;i<=this.numPlanets;i++){
    this.motionIncrease.push(this.initialIncrease);
    this.initialIncrease -= 0.002;
  }
  this.planetDtstance = 35;
}

Planet.prototype.drawSun = function(){
  this.context.beginPath();
  this.context.arc(0, 0, this.sunRad, 0, 2 * Math.PI, false);
  this.context.fillStyle = "#FFD700";
  this.context.fill();
  this.context.lineWidth = 2;
  this.context.strokeStyle = "black";
  this.context.stroke();
};

Planet.prototype.drawPlanet = function(color){
  this.context.beginPath();
  this.context.arc(0, 0, this.planetRad, 0, 2 * Math.PI, false);
  this.context.fillStyle = color;
  this.context.fill();
  this.context.lineWidth = 2;
  this.context.strokeStyle = "black";
  this.context.stroke();
}

Planet.prototype.draw = function(){
  this.context.save();
  this.context.scale(this.scale, this.scale);
  this.context.translate(this.cx, this.cy);
  this.drawSun();
  for(var i = 1; i <= this.numPlanets; i++){
    this.context.save();
    //this.context.translate(this.cx + (this.planetDtstance * i) * Math.cos(this.circularMotion*Math.PI/180), this.cy + (this.planetDtstance * i) * Math.sin(this.circularMotion*Math.PI/180));
    this.context.rotate(this.circularMotion[i-1]);
    this.context.translate(this.planetDtstance*i, 0);
    this.drawPlanet(this.colors[i-1]);
    this.context.restore();
  }
  this.context.restore();
}

Planet.prototype.update = function(){
  for(var i=1; i<=this.numPlanets;i++){
    this.circularMotion[i-1] += this.motionIncrease[i-1];
  }

}
