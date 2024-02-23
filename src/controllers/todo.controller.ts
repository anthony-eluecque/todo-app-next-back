import {Request, Response} from 'express'
import Todo from '../models/todo.model'
import { Res } from '../helpers';
import { validationResult } from "express-validator";
import messages from "../docs/messages.json";

/**
 * Create new task
 * 
 * @funcion createTodo
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {Promise<Response>} - Response object
 * @throws {Error} - Error due to the request
 */
export const createTodo = async (req: Request, res: Response) => {
    try {
        const { title, content, completed } = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return Res.send(res, 400, messages.defaults.badRequest, errors);
        }
        const todo = new Todo({
            title,
            content,
            completed
        });
        const newTodo = await todo.save();
        Res.send(res,200, messages.todo.created, newTodo);
    } catch (error) {
        Res.send(res,500, messages.defaults.serverError, error);
    }
}

/**
 * Get all tasks
 * 
 * @funcion getTodos
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {Promise<Response>} - Response object
 * @throws {Error} - Error due to the request
 */
export const getTodos = async (req: Request, res: Response) => {
    try {
        const todos = await Todo.find();
        Res.send(res,200, messages.todo.getTodos, todos);
    } catch (error) {
        Res.send(res,500, messages.defaults.serverError, error);
    }
}

/**
 * Update task by id
 * 
 * @funcion updateTodo
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {Promise<Response>} - Response object
 * @throws {Error} - Error due to the request
 */
export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.body;
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            return Res.send(res, 400, messages.defaults.badRequest, errors);
        }
        const updateSet = {
            title: req.body.title,
            content: req.body.content,
            completed: req.body.completed
        }
        await Todo.findByIdAndUpdate(id, {$set: updateSet }, {new: true});
        Res.send(res,204, messages.todo.updateTodo)
    } catch (error) {
        Res.send(res,500, messages.defaults.serverError, error);
    }
}

/**
 * Delete task by id
 * 
 * @funcion deleteTodoById
 * @param {Request} req - Request object
 * @param {Response} res - Response object
 * @returns {Promise<Response>} - Response object
 * @throws {Error} - Error due to the request
 */
export const deleteTodoById = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await Todo.findByIdAndDelete(id);
        Res.send(res,204, messages.todo.deleteTodoById);
    } catch (error) {
        Res.send(res,500, messages.defaults.serverError, error);
    }
}