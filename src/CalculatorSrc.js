
function add(answer) {
    var sum = 0;
  for (i = 0; i < answer.length; i++) {
    sum = sum + answer[i]
  };
   return sum;
};


function multiply(arr){
    var result = 1;
    for (i = 0; i < arr.length; i++){
    result = result * arr[i];
};
 return result;
};