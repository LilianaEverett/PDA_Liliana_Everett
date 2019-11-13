var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('it can add 1 to 4 and get 5', function(){
    calculator.previousTotal = 4;
    calculator.add(1);
    assert.equal(calculator.runningTotal, 5);
  })

  it('it can subtract 4 from 7 and get 3', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.equal(calculator.runningTotal, 3);
  })
  
  it('it can multiply 3 by 5 and get 15', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.equal(calculator.runningTotal, 15);
  })

  it('can divide 21 by 7 and get 3', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.equal(calculator.runningTotal, 3);
  })

  // calculator.numberClick() - concatenate multiple number button clicks:

  it('can concatenate multiple number button clicks', function(){
    calculator.numberClick(5);
    calculator.numberClick(5);
    assert.equal(calculator.runningTotal, 55);
  })

  // calculator.operatorClick() - chain multiple operations together:

  it('can chain multiple operations together', function(){
    // calculator.runningTotal = 0;
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.operatorClick('*');
    calculator.numberClick(5);
    calculator.operatorClick('/');
    calculator.numberClick(5);
    calculator.operatorClick('-');
    calculator.numberClick(5);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal,5);
  })

  // calculator.clearClick() - clear the running total without affecting the calculation:

  it('can clear the runningTotal without affecting the calculation', function(){
    calculator.numberClick(5);
    calculator.operatorClick('+');
    calculator.numberClick(5);
    calculator.clearClick();
    calculator.numberClick(2);
    calculator.operatorClick('=');
    assert.equal(calculator.runningTotal, 7);
  })

  // What does the code do in exceptional circumstances? Specifically, if you divide by zero, what is the effect? Write a test to describe what you'd prefer to happen, and then correct the code to make that test pass (you will need to modify the Calculator model to meet this requirement).

  it('can not divide 21 by 0 so the result will be 21', function(){
    calculator.previousTotal = 21;
    calculator.divide(0);
    assert.equal(calculator.runningTotal, 21);
  })
  

});
