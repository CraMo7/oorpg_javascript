var assert = require("chai").assert;
var Hero = require("../hero");

var hero;

describe("Hero", function(){
  beforeEach(function(){
    hero = new Hero("Eaglestorm", "courgette");
  });
  it("should construct with a name", function(){
    assert.equal("Eaglestorm", hero.name);
  });
  it("should construct with 100 health", function(){
    assert.equal(100, hero.health);
  });
  it("should construct with favourite food", function(){
    assert.equal("courgette", hero.favFood);
  });
  it("should set default name if no name passed to constructor", function(){
    var heroDefault = new Hero();
    assert.equal("The Unknown Hero", heroDefault.name);
  });
  // can't test default favFood as it selects a valid food from the Food list array randomly
  
});