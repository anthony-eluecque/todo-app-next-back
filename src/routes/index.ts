import express from "express";
const router = express.Router();
import useTodoRouter from './todo.route';

router.use('/todo', useTodoRouter);

export default router;