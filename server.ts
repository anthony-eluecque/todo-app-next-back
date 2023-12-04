import { initDatabaseConnection } from './src/config/database';
import dotenv from 'dotenv';

// Application setup
dotenv.config();

// Database Connection
initDatabaseConnection();