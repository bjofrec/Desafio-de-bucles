for (let impar = 1 ; impar <= 20; impar++){
    if (impar % 2 != 0) {
    console.log (impar);
    }
}
//---------------------------------//

for (let mult3 = 100; mult3 >= 0; mult3--){
    if (mult3 % 3 === 0){
        console.log(mult3);
    }
} 
//------------------------------------//
var num1 = 4
while (num1 >= -3.5){
    console.log(num1);
    num1 = num1 - 1.5;
}
//-------------------------------------//
let sum = 0
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log(sum);
//-------------------------------------//
let product = 1;
for (let i = 2; i <= 12; i++){
    product = product * i;
}
console.log(product);
