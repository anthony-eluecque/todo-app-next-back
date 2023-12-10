import express from "express";
const router = express.Router();
import { createTodo, getTodos } from '../controllers';

router.post('/', createTodo);
router.get('/', getTodos);

export default router;