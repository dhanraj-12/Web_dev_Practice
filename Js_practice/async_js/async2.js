console.log("hi");

function timeout() {
    console.log("TImeout is completed");
}

console.log("2nd operation");
setTimeout(timeout,1000);

let c = 0;
for(let i = 0; i<1000000; i++) {
    c++;
}
console.log("Expensive task is completed");

/*
 option 1 --> correcct 
    hi
    2nd option
    Expensive task is completed
    TImeout is completed


 option 2 --> wrong 
    hi
    2nd option
    TImeout is completed
    Expensive task is completed

 */


    /**
     * 
     the asynchronus task which is compelted but if threaad is busy doing another cpu operation
     then the async task output will go in callback queue
     */