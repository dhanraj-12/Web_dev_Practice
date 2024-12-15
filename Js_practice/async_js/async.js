const { log } = require("console");
let fs = require("fs");

function print(err, data) {
    if (err) {
        console.error("Error reading file:", err.message);
        return;
    }
    console.log(data);
}



fs.readFile("/home/dj/drive/Web_Dev/Js_practice/async_js/a.txt", "utf-8", print);
fs.readFile("/home/dj/drive/Web_Dev/Js_practice/async_js/b.txt", "utf-8", print);
console.log("Hello world")