import express from "express";
const router = express.Router();
import { createTodo } from '../controllers';

router.post('/', createTodo);

export default router;