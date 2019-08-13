describe("A simple calculator that can add 2 numbers", function(){
    it ("should add 0 and 0 to return 0", function() {
        var x = 0;
        var y = 0;
        var result = addition(x, y);

        expect(result).toEqual(0);
    })

    it ("should return the sum of -1 and -1 as -2", function() {
        var x = -1;
        var y = -1;
        var result = addition(x, y);

        expect(result).toEqual(-2);
    })

    it ("should return 9 as the result of adding 4 and 5", function(){
        var x = 4;
        var y = 5;
        var result = addition(x, y);

        expect(result).toEqual(9);
    })
})

describe("A simple calculator that can add as many numbers as it is given", function(){
    it ("should be able to perform addition first ", function() {
        var x = [0, 3];
        
        var result = addMany(x);

        expect(result).toEqual(3);
    })
    it ("should then be able to perfectly add all the numbers in the array", function() {
        var x =[-2,-1,1,2];
        
        var result = addMany(x);

        expect(result).toEqual(0);
    })
    
    it ("should return 14", function(){
        var x = [1,3,4,7];
        
        
        var result = addMany(x);

        expect(result).toEqual(15);
    })
})

describe("Checking simple calculator that multiply 2 numbers", function() {
  
    it ("should be able to multiply any two negative numbers", function() {
        var x = -1;
        var y = -2;
        var result = Product(x, y);

        expect(result).toEqual(2);
    })

    it ("should be able to multiply any two positive numbers", function() {
        var x = 5;
        var y = 6;
        var result = Product(x, y);

        expect(result).toEqual(30);
    })
})

     describe ("Simple calculator that can multiply multiple given numbers", function() {
        it ("should be able to multiply any two positive numbers", function() {
            var x = [0, 0];
            
            var result = productMany(x);
    
            expect(result).toEqual(0);
        })
        it ("should be able to multiply any two negative numbers", function() {
            var x =[-1, -2];
            
            var result = productMany(x);
    
            expect(result).toEqual(2);
        })
        
        it ("should be able to multiply any amount of given numbers", function() {
            var x = [1,2,3,4];
            
            
            var result = productMany(x);
    
            expect(result).toEqual(24);
        })
})