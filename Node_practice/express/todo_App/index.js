const fs = require("fs");
const express = require('express')
const app = express()
const port = 3000

let todos = [

    {
        id: "56",
        todo: "dinner"
    }
];



/* URL --> http://localhost:3000/todos/read/{id} 

*/
app.get("/todos/read/:id", (req,res) => {  
    const a = parseInt(req.params.id);
    for(let i = 0; i<todos.length; i++) {
        if(todos[i].id == a) {
            res.send(todos[i].todo);
            break;
        }
    }
})

/*
    URL --> http://localhost:3000/todos/create/{id}/{todotask}
*/
app.post("/todos/create/:id/:todo", (req, res) => {
    const todoId = parseInt(req.params.id);  // Parse the todo ID
    const todoTask = req.params.todo;        // Get the todo task description

    // Push the new todo item to the todos array
    todos.push({
        id: todoId,
        todo: todoTask
    });

    // Send a response back indicating success
    res.status(201).send(todos);
});




/*   
    URL --> http://localhost:3000/todos/delete/{id}
*/

app.delete("/todos/delete/:id", (req,res) => {
    const todoId = parseInt(req.params.id);

    let flag = false;
    for(let i = 0; i<todos.length; i++) {
        if(todoId == todos[i].id) {
            todos.splice(i,1);
            flag = !flag
            break;
        }
    }

    if(flag) {
         res.status(200).send(todos);
    }else {
        res.status(200).send(todos);
    }
}) 








console.log(todos)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})