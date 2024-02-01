import Mongoose from "mongoose";
import { check, validationResult } from 'express-validator';

export interface TodoModel extends Mongoose.Document {
    title : string
    content : string
    completed : boolean
};

const titleValidator = check("title", "Title should be at least 3 characters long").isLength({ min: 3 });
const contentValidator = check("content", "Content should be at least 10 characters long").isLength({ min: 10 });
const completedValidator = check("completed", "Completed should be a boolean").isBoolean();

const TodoSchema = new Mongoose.Schema({
    title : {
        type : String,
        maxLength: 64,
        required: true,
        unique: true,
        validate : {
            validator: async function (value: string) {
                await titleValidator.run(this);
                const errors = validationResult(this);
                if (!errors.isEmpty()) {
                    throw new Error(errors.array()[0].msg);
                }
                return true;
            }
        }
    },
    content : {
        type: String,
        maxLength: 64,
        required: true,
        validate : {
            validator: async function (value: string) {
                await contentValidator.run(this);
                const errors = validationResult(this);
                if (!errors.isEmpty()) {
                    throw new Error(errors.array()[0].msg);
                }
                return true;
            }
        }
    },
    completed : {
        type: Boolean,
        default: false,
        required: true,
        validate : {
            validator: async function (value: string) {
                await completedValidator.run(this);
                const errors = validationResult(this);
                if (!errors.isEmpty()) {
                    throw new Error(errors.array()[0].msg);
                }
                return true;
            }
        }
    }
});

const Todo = Mongoose.model<TodoModel>("Todo", TodoSchema, "todos");
export default Todo;