var Food = require("./food");
var food;
//food list object is contained within hero constructor, as the food list is simply a selection of all the possible favourite foods a particular hero object might have - It is not necessarily an exhaustive list of all foods in existance, it is only the foods that that hero knows about and that come to mind as possible favourites for them.

var Hero = function(name, favFood){
  food = new Food("courgette", "chocolate", "cake", "broccoli", "beef steak", "potato", "salmon");
  this.name = name ? name : "The Unknown Hero";
  this.health = 100;
  this.favFood = favFood ? favFood : food.list[Math.floor(Math.random() * food.list().length)];
};

Hero.prototype = {
  greet: function(){
    var greeting = "Hello, my name is " + this.name + ".";
    return greeting;
  },
  eat: function(){

  }
};



module.exports = Hero;