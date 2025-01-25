const mongoose = require("mongoose");
const schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

const user = new schema({
    name : String,
    email : String,
    password : String
})

const todo = new schema({
    userId : ObjectId,
    title : String,
    done : Boolean 
})

const TodoModel = mongoose.model('Todo',todo);
const UserModel = mongoose.model('User',user);

module.exports =  {
    UserModel,
    TodoModel
}

