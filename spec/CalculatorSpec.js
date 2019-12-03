let SimpleCalculator = require('../src/CalculatorSrc');
let test = new SimpleCalculator();

describe("A simple calculator that can add 2 numbers", function(){
  it ("should add 0 and 0 to return 0", function() {
        
        expect(test.add(0,0)).toEqual(0);
    });

    it ("should return the sum of -1 and -1 as -2", function() {
        
        expect(test.add(-1,-1)).toEqual(-2);
    });

    it ("should return 9 as the result of adding 4 and 5", function(){
      
        expect(test.add(4,5)).toEqual(9);
    });
});

describe("A simple calculator that can add as many numbers as it is given", function(){
    
    
    it ("should then be able to perfectly add all the numbers in the array", function() {
        
        expect(test.add(1,2,3,4,5)).toEqual(15);
    });
});

describe("Checking simple calculator that multiply 2 numbers", function() {
    
    
    it ("should be able to multiply any two negative numbers", function() {
      
        expect(test.multiply(-1,-2)).toEqual(2);
    });

    it ("should be able to multiply any two positive numbers", function() {
    
        expect(test.multiply(5,6)).toEqual(30);
    });
});

describe ("Simple calculator that can multiply multiple given numbers", function() {
       
        it ("should be able to multiply any amount of given numbers, negative and positive", function() {
             
            expect(test.multiply(5,5,-1,2,2)).toEqual(-100);
        });
});