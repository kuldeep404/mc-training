import mongoose from "mongoose";
import logger from "../libs/logger";

export class Database {
  static open({ mongoUri }) {
    return new Promise((resolve, reject) => {
      const options = {
        autoIndex: true, // Build indexes
        bufferMaxEntries: 0,
        keepAlive: 1,
        poolSize: 10, // Maintain up to 10 socket connections
        reconnectInterval: 500, // Reconnect every 500ms
        reconnectTries: Number.MAX_VALUE, // Never stop trying to reconnect
        useNewUrlParser: true,
        useUnifiedTopology: true

      };
      mongoose.connect(mongoUri, options);
      mongoose.connection.on("connected", () => {
        logger.info('connected to mongo client!');
        resolve();
      });
      mongoose.connection.on("error", err => {
        logger.info('connection not made to db!!!!!!');
        reject(err);
      });
    });
  }

  static close() {
    mongoose.disconnect();
  }
}
