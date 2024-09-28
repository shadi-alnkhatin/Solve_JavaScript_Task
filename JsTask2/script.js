"use strict"
{
    //  Find Factorial Number
    let x = 8; 
    let factorial = 1;
    for (let i = x; i != 0; i--) {
    factorial = factorial * i;
    }
    console.log(factorial);    
}
{
    function printPrimes(n) {
        for (let i = 2; i <= n; i++) {
            let isPrime = true;
            for (let j = 2; j <= Math.sqrt(i); j++) {
                if (i % j === 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                console.log(i);
            }
        }
    }

    printPrimes(10); 
    
}

{
    let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
          console.log(arr[i][j]);
        }
      } 

}

{
    let arr = [1, 2, 3, 4, 5];
    for (let i =arr.length-1; i >= 0; i--) {
        const element = arr[i];
        console.log(arr[i]);
    }

}
{
    let arr1=[1, 2, 3];
    let arr2= [4, 5, 6];

    let CompinedArr=arr1.concat(arr2);
}
{

        let array = [1, 2, 3, 4, 5, 6];
        let startIndex = 2;
        let endIndex = 4;
    
        let result = array.slice(0, startIndex).concat(array.slice(endIndex));
        console.log(result);
}
// 4. Use the for...of loop to iterate through an array
let arr = [1, 2, 3, 4, 5];
for (let number of arr) {
    console.log(number);
}

{
    // 5. Create an array of numbers and use the forEach() method to print each element to the console
let arr = [1, 2, 3, 4, 5, 6];
arr.forEach(number => console.log(number)); 
}

// JavaScript IF statements

// 1. Check if the password is at least 8 characters long
let password = "mypassword123";
if (password.length >= 8) {
    console.log("Your password is strong"); 
} else {
    console.log("Your password is too short");
}

// 2. Check if the color is a primary color (red, green, or blue)
let color = "red";
if (color === "red" || color === "green" || color === "blue") {
    console.log("Color is a primary color"); 
} else {
    console.log("Color is not a primary color");
}

// 3. Check if y is a negative number
let y = -5;
if (y < 0) {
    console.log("y is a negative number"); 
} else {
    console.log("y is not a negative number");
}

// 4. Check if a variable "list" is an array
let list = [1, 2, 3];
if (Array.isArray(list)) {
    console.log("It's an array"); 
} else {
    console.log("It's not an array");
}

{
    let person = { name: "Adam", age: 25 };
    person["gender"] = "male";
    console.log(person); 
}
{
    let person2 = { name: "Adam", age: 25, gender: "male" };
    let values = Object.values(person2);
}
{
    let person3 = { name: "Adam", age: 25, gender: "male" };
    let entries = Object.entries(person3);
}
{
    let obj1 = { name: "Adam", age: 25 };
    let obj2 = { gender: "male" };
    let mergedObject = Object.assign({}, obj1, obj2);

    console.log(mergedObject); 
}
{
    let sealedPerson = { name: "Adam", age: 25 };
    Object.seal(sealedPerson);

}


