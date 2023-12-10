import express from 'express';
import { initDatabaseConnection } from './src/config/database';
import useRouter from './src/routes/index'
import dotenv from 'dotenv';

const app = express();
const port = 5000;

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
    app.listen(port, () => {
        console.log(`Listening on port ${port}...`);
    });
    app.use(useRouter);
  }
  startServer();