/* Data Types and Variable */

/* Var--> we don't use usually
    It has function-Scope and redifination can be done which will give problem in further debugging. If not 
    define in function then it has global scope.
*/

var a = 10;
console.log(a);
function test() {
    var b = 20;
    console.log(b); 
}
test();

// console.log(b); --> this will error
var a = 20;  // --> this can be done and can give error in further debugging so we don't use var

/* let --> Had a block scope and cannot redeifine it.
*/

let v = 11;
console.log(v);
function testLet() {
    let b = 21;
    console.log(b); 
}
testLet();

// let v = 12; --> this can not be done we cannot redefine the variables using let

/* const --> same like in cpp once defined cannot be maniulated
*/

const c = 50;
console.log(c);
// c = 30; --> this will error




