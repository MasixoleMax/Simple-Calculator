function addition(x, y){
    return result = x + y
}


function addMany(array) {
    var sum = 0;
    for (let i in array) {
      sum = sum + array[i];
      
    }
    return sum;
}


function Product(x, y){
    return product = x * y;
}

function productMany(array){
    
    let product = 1;  
    for (let i of array){
        product = i * product;
    }
    return product;
}