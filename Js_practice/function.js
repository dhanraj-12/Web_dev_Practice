function PrintName(Name) {
    console.log(Name);
}

PrintName("Dhanraj");

function printOddTillN(n) {
    let arr = [];
    for(let i = 1; i<=n; i++) {
        if(i&1) {
            // console.log(i);
            arr.push(i);
        }
    }

    return arr;
}

let arr = printOddTillN(10);
console.log(arr);

// Another type of Function returning

const expo = function(a,b) {
    return a**b;
}

console.log(expo(2,10));

// arrow function

const algo = (string1,string2) => {
    return string1 + " " + string2;
} 
let str1 = "Dhanraj";
let str2 = "Jadhav";
let ans = algo(str1,str2);
console.log(ans);
