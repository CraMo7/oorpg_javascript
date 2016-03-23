var Food = function(){
  this.foods = [];
  for (food of arguments){
    this.foods.push(food);
  }
};

Food.prototype = {
  list: function(){
    return this.foods;
  },
  add: function(foodName){


  },
  remove: function(foodName){


  }
};



module.exports = Food;