describe("A simple calculator that can add 2 numbers", function(){
    
    it ("should add 0 and 0 to return 0", function() {
        answer = [0,0]
        expect(add(answer)).toEqual(0);

    });

    it ("should return the sum of -1 and -1 as -2", function() {
        answer = [-1,-1]
        expect(add(answer)).toEqual(-2);
    });

    it ("should return 9 as the result of adding 4 and 5", function(){
        answer = [5,4]
        expect(add(answer)).toEqual(9);
    });
});

describe("A simple calculator that can add as many numbers as it is given", function(){
    
    it ("should be able to perform addition first ", function() {
        answer = [0, 3, 1, 5, 11, 10, 1, 9]
        expect(add(answer)).toEqual(40);
    });

    it ("should then be able to perfectly add all the numbers in the array", function() {
        answer = [-2,-1,1,2]
        expect(add(answer)).toEqual(0);
    });
    
    it ("should return 14", function(){
        answer = [1,3,4,7]
        expect(add(answer)).toEqual(15);
    });
});

describe("Checking simple calculator that multiply 2 numbers", function() {
  
    it ("should be able to multiply any two negative numbers", function() {
        arr = [-1,-2]
        expect(multiply(arr)).toEqual(2);
    });

    it ("should be able to multiply any two positive numbers", function() {
        arr = [5,6]
        expect(multiply(arr)).toEqual(30);
    });
});

describe ("Simple calculator that can multiply multiple given numbers", function() {
        it ("should be able to multiply any two positive numbers", function() {
            arr = [0, 0];
            expect(multiply(arr)).toEqual(0);
        });

        it ("should be able to multiply any two negative numbers", function() {
            arr =[-1, -2];
            expect(multiply(arr)).toEqual(2);
        });
        
        it ("should be able to multiply any amount of given numbers", function() {
             arr = [1,2,3,4];
            expect(multiply(arr)).toEqual(24);
        });
});