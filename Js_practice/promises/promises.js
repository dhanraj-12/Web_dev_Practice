console.log("1st log");


function doasyncfun(resolve) {
    console.log("doasync call hau hai");
    setTimeout(resolve,3000);
}  

// Calling resolve and calling callback is same or wequivalenmt


const p = new Promise(doasyncfun);


function callback() {
    console.log("promise is reoslved and valued is used");
}

p.then(callback);