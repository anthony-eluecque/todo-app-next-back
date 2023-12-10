import express from 'express';
import { initDatabaseConnection } from './src/config/database';
import useRouter from './src/routes/index'
import dotenv from 'dotenv';

const app = express();

// Application setup
dotenv.config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello World")
});

// Database Connection
initDatabaseConnection();

const startServer = async () => {
    app.listen(process.env.PORT, () => {
        console.log(`Listening on port ${process.env.PORT}...`);
    });
    app.use(useRouter);
  }
  startServer();