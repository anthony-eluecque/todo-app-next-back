import express from 'express';
import useRouter from './routes/index'
import './config/database';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/",useRouter)

export default app;
