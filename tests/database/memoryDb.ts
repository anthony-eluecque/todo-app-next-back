import Mongoose, { ConnectOptions } from 'mongoose';
import { MongoMemoryServer } from 'mongodb-memory-server';

export class MemoryDatabase {
 
    private mongoServer: MongoMemoryServer|null;

    constructor() {
      this.mongoServer = null
    }

    public connect = async () => {
        try {
            await Mongoose.disconnect();
            this.mongoServer = await MongoMemoryServer.create();
            const mongoUri = this.mongoServer.getUri();
    
            const opts : ConnectOptions = {
                serverSelectionTimeoutMS: 5000,
                heartbeatFrequencyMS: 1000,
            };
            await Mongoose.connect(mongoUri, opts);
        } catch (error) {
            console.error(error);
        }
    }

    public close = async () => {
        try {
            await Mongoose.disconnect();
            await this.mongoServer?.stop();  
        } catch (error) {
            console.error(error)   
        }
    };

    public clear = async () => {
        try {
            const collections = Mongoose.connection.collections;
            for (const key in collections) {
                const collection = collections[key];
                await collection.deleteMany({});
            }
        } catch (error) {
            console.error(error)
        }
    };
}