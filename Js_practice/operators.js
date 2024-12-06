/*
  Only New operaor is in this file which is new to me;
 */

  // Exponentiation

let x = 5;
let y = 5;

let ans = x ** 3;
console.log(ans);      // 125

ans = x ** y;
console.log(ans);      // 3125

// Strict Equality v/s Loose Equality
/*
    Stricly Equality --> it checks value as well as data type
    Loose Equallity --> it checks only Value
*/

let a = "10";
console.log(typeof(a));        // string

let b = 10;
console.log(typeof(b));         // number

console.log(a == b);            // true

console.log(a === b);           // false

/*
  Falsy value: 1. Undefined
               2. NULL
               3.0
               3. False
               5. NaN
               6. "" --> Empty string 
  Truthy value: The value which is not in falsy
*/

