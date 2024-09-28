//1 Cash flow ratio
let cash=1000;
let current_liabilities=500
console.log(cash/current_liabilities);

//2 Net income
let revenues=1000;
let expenses=500;
console.log(revenues-expenses);


//3 Total assets

let liabilities =1000;
let equity =500;
console.log(liabilities+equity);

//4 Net income
let profit=1000;
let sales=500;
console.log(profit*500);

//5 Average
let numbers=[7, 9, 2];
let average=0;
let sum =0 ;
for (let i = 0; i < numbers.length; i++) {
    sum+=numbers[i];
}
average=sum/numbers.length;
console.log(average);


//6  Discount
let price=150;
let discount=30;
let discount_value=price* (30/100);
console.log(price-discount_value)

//7 Age limit
let age = 20;
console.log(age>18 && age<30);

//8 Exponential
let num_1=2;
let num_2=3;
console.log(num_1**num_2);

//9 Remainder
let num1=10 ;
let num2=4;
console.log(num1%num2);
