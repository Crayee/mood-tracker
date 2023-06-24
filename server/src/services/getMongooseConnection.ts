import mongoose, { Connection } from "mongoose";
import { ConnectionOptions } from "tls";

let connection: Connection | undefined;

export const getMongooseConnection = () => {
  if (!connection) {
    connection = createMongooseConnection();
  }
  return connection;
};

const createMongooseConnection = () => {
  const uri = process.env.MONGO_URI;
  const options: ConnectionOptions = {};
  return mongoose.createConnection(uri ?? "", options);
};
