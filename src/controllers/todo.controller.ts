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