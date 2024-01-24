import {Request, Response} from 'express'
import Todo from '../models/todo.model'
import { Res } from '../helpers';


export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, content, completed } = req.body;
        const todo = new Todo({
            title,
            content,
            completed
        });
        const newTodo = await todo.save();
        Res.send(res,200,'Succesfully post one todo',newTodo);
    } catch (error) {
        Res.send(res,500,'Internal Server Error',error);
    }
}

export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        Res.send(res,200,'Got All Todos',todos);
    } catch (error) {
        Res.send(res,500,'Internal Server Error',error);
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const updateSet = {
            title: req.body.title,
            content: req.body.content,
            completed: req.body.completed
        }
        await Todo.findByIdAndUpdate(id, {$set: updateSet }, {new: true});
        Res.send(res,204,'Todo updated successfully')
    } catch (error) {
        Res.send(res,500,'Internal Server Error',error);
    }
}

export const deleteTodoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        Res.send(res,204,'Todo deleted successfully');
    } catch (error) {
        Res.send(res,500,'Internal Server Error',error);
    }
}