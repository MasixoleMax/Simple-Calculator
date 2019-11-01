class SimpleCalculator {
  add(){
     var sum = 0;
       for (let i = 0; i < arguments.length; i++) {
         sum = sum + arguments[i];
       }
        return sum;
  }

  multiply(){
   var result = 1;
       for (let i = 0; i < arguments.length; i++){
       result = result * arguments[i];
   };
   return result;
  }
}
 let addition = new SimpleCalculator();
 let multiplication = new SimpleCalculator();

addition.add(1,2,3,4);
multiplication.multiply(1,2,3,4);
