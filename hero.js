var Food = require("./food");
var food = new Food("courgette", "chocolate", "cake", "")

var Hero = function(name, favFood){
  this.name = name ? name : "The Unknown Hero";
  this.health = 100;
  this.favFood = favFood ? favFood : food.list[Math.floor(Math.random() * food.list().length)];
};



module.exports = Hero;