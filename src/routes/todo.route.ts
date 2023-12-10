import express from "express";
const router = express.Router();
import { createTodo, getTodos, updateTodo } from '../controllers';

router.post('/', createTodo);
router.get('/', getTodos);
router.put('/', updateTodo);

export default router;