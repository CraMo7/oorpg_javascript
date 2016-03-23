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
});