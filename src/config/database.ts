import Mongoose from "mongoose";
import { db } from "../config";

let dbURI;

if (db.user && db.password){
    dbURI = `mongodb://${db.user}:${encodeURIComponent(db.password)}@${
        db.host
    }:${db.port}/${db.name}`;
} else {
    dbURI = `mongodb://${ db.host }:${db.port}/${db.name}`;
}


Mongoose.set('strictQuery',true)
Mongoose.connect(dbURI)

Mongoose.connection.on('connected', () => {
    console.log("🚀 Database successfully connected")
})

Mongoose.connection.on('error', (err) => {
    console.log('❌ Mongoose default connection error: ' + err);
});
  
Mongoose.connection.on('disconnected', () => {
    console.log('🚪 Mongoose default connection disconnected');
});


// If the Node process ends, close the Mongoose connection
process.on('SIGINT', () => {
    Mongoose.connection.close().finally(() => {
      console.log(
        'Mongoose default connection disconnected through app termination',
      );
      process.exit(0);
    });
});