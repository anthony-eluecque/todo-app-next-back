import {Request, Response} from 'express'
import Todo from '../models/todo.model'

export const createTodo = (req: Request, res: Response) => {
    try {

        // on récupère les données de la requête
        const { title, content, completed } = req.body;

        // On créé notre todo
        const todo = new Todo({
            title,
            content,
            completed
        });

        // On sauvegarde le todo
        const newTodo = todo.save();

        res.status(200).json(newTodo);
        
    } catch (error) {
        res.status(500).json(error);
        throw error;
    }
}