import express from "express";
const router = express.Router();
import { createTodo, deleteTodoById, getTodos, updateTodo } from '../controllers';

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/', updateTodo);
router.delete('/:id',deleteTodoById);

export default router;