// For Loop 

for(let i = 0; i<6; i++) {
    console.log(i);
}

// while loop

let i = 0;
while(i < 9) {
    console.log("dj");
    i++;
}

i = 0;
do{
    console.log("ch");
    i++;
}while(i < 9);

/* For Each Loop
    Using the forEach method, 
    we pass a callback function as an argument. 
    This function is executed for each element in the array
 */

let numbers = [1,2,3,4,5,6,7,8,9,0];

numbers.forEach((number,index)=> {
    number += 1;
    numbers[index] = number;

})

console.log(numbers);

/* Implementation of 'for of' loop
    
The for...of loop is widely used in JavaScript for various tasks, including:

Iterating over arrays, strings, maps, sets, and other iterable objects.
Simplifying code for iterating over collections without needing explicit index management.
Performing operations on each element of an iterable, 
such as filtering, mapping, or transforming data.

*/

numbers = [1, 2, 3, 4, 5, 6, 7];

let sum = 0;
for(let value of numbers){
    sum += value;
}
console.log(sum);

 /* For in Loop
    The 'for in' loop in JavaScript facilitates the iteration over the enumerable properties 
    of an object. It iterates through all enumerable properties of an object, 
    including inherited ones, providing access to both keys and values.
*/

const person = {
    name: 'Mayank',
    age: 21,
    city: 'Delhi'
  };
  
  for (const key in person) {
    console.log(key + ": " + person[key])
  }
  
/* Map() Methid  
  The map() method in JavaScript is used to iterate over each element of an array and apply 
  a transformation function to each element, creating a new array with the results of the 
  transformations.
*/

numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers); 



