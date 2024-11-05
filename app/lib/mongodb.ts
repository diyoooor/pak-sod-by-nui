import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const uri = process.env.MONGODB_URI;
const options = {
  maxIdleTimeMS: 30000,
};

const client = new MongoClient(uri, options);
const clientPromise = client.connect();

export default clientPromise;
