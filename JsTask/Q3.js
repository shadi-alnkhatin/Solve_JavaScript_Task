{
    var arr=["Coding", "Academy", "By", "Orange"];
    arr.push("Jordan")
    console.log(arr);    
    arr.pop();
    arr.pop();
    arr.pop();
    console.log(arr);
    arr.unshift("To")
    arr.unshift("Welcome");
    arr.push("By")
    arr.push("Orange");
    console.log(arr);
    arr.shift();
    arr.shift();
    arr.shift();
    console.log(arr);
    arr.unshift("Coding")
    console.log(arr);
    arr.splice(1,2)
    console.log(arr);
}

// Using these two arrays write the JavaScript code that performs these operations on them:
// var fruit = ["banana", "apple", "orange", "watermelon"];
// var vegetables = ["carrot", "tomato", "pepper", "lettuce"];




// e. Find the length of the vegetable array.
// f. Add that number to the end of the vegetable array.
// g. Put the two arrays together into one array. Fruit first. Call the new Array "food".
// h. Remove 2 elements from your new array starting at index 4.
// i. Reverse your array.
// j. Turn the array into a string. 

{
    let fruit = ["banana", "apple", "orange", "watermelon"];
    let vegetables = ["carrot", "tomato", "pepper", "lettuce"]; 
    // a. Remove the last item from the vegetable array.   
    vegetables.pop();
    // b. Remove the first item from the fruit array.
    fruit.shift();
    // c. Find the index of "orange."
    fruit.indexOf("Orange");
    // d. Add that number to the end of the fruit array.
    fruit.push("Ora")
    console.log(fruit);
}
