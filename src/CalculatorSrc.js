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



 
 
 
 
 
 
 
 
 
//   function add() {
//   var sum = 0;
//   for (i = 0; i < arguments.length; i++) {
//     sum = sum + arguments[i]
//   };
//    return sum;
// };
 
// function multiply(){
//     var result = 1;
//     for (i = 0; i < arguments.length; i++){
//     result = result * arguments[i];
// };
//  return result;

// };

// console.log(add(1,2,3,4));
// console.log(multiply(1,2,3,4));
