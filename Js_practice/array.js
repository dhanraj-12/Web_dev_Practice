
//    Creating array two way-->

array1 = [1,2,3,4,true,"Dhanraj"]; // 1st way
array2 = new Array(1,2,3,3); // 2nd way for dynamic allocation

console.log(array1);
console.log(array2);

// Insertion and deletion methods

/*
 * push : Adds an item to the end of the array.
 * unshift : Adds an item to the beginning of the array.
 * pop : Removes the last item from the array.
 * shift : Removes the first item from the array.
*/

array1.push(10);
array2.unshift(55);
console.log(array1);
console.log(array2);

// Filter Method in array--> 

/* 
In JavaScript, the filter() method is used to create a
new array with all elements that satisfy the specific 
condition in the provided callback function. It doesn't 
change the original array.
filter() method returns a new array with elements that satisfy 
the condition specified in the callback function.
*/

newArray = array1.filter(function(number) {
    return number > 2;
})

console.log(newArray);