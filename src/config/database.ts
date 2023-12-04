import Mongoose, { MongooseError } from "mongoose";

export const initDatabaseConnection = async () => {
    try {
        if (!process.env.DBNAME)
            throw MongooseError;

        Mongoose.set('strictQuery',true)
        await Mongoose.connect(process.env.DBNAME)
        console.log("🚀 Database successfully connected\n");

    } catch (error) {
        console.log("Database connection Error : " + error);      
    }
}