import { MongoClient } from "mongodb";

const DB_OPTIONS = {};
const MONGODB_URI = process.env.MONGODB_URI || "";
export const client = new MongoClient(MONGODB_URI, DB_OPTIONS);
export const db = client.db("sample_mflix");
