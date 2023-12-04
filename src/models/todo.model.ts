import Mongoose from "mongoose";

export interface TodoModel extends Mongoose.Document {
    title : string
    content : string
    completed : boolean
};

const TodoSchema = new Mongoose.Schema({
    title : {
        type : String,
        maxLength: 64,
        required: true,
        unique: true
    },
    content : {
        type: String,
        maxLength: 64,
        required: true
    },
    completed : {
        type: Boolean,
        default: false,
        required: true
    }
});

const Todo = Mongoose.model<TodoModel>("Todo", TodoSchema, "todos");
export default Todo;