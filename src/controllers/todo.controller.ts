import {Request, Response} from 'express'
import Todo from '../models/todo.model'

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, content, completed } = req.body;
        const todo = new Todo({
            title,
            content,
            completed
        });
        const newTodo = await todo.save();
        res.status(200).json(newTodo);
    } catch (error) {
        res.status(500).json(error);
        throw error;
    }
}

export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        res.status(200).json(todos);
    } catch (error) {
        res.status(500).json(error);
        throw error;
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id, title, content, completed } = req.body;
        const updateSet = {
            title: req.body.title,
            content: req.body.content,
            completed: req.body.completed
        }
        await Todo.findByIdAndUpdate(id, {$set: updateSet }, {new: true});
        res.statusMessage = 'Todo updated successfully';
        res.status(204).json({});
    } catch (error) {
        res.status(500).json(error);
        throw error;
    }

}