import { betterAuth } from 'better-auth';
import { MongoClient } from 'mongodb';
import { mongodbAdapter } from '@better-auth/mongo-adapter';

const uri = process.env.MONGODB_URL;

if (!uri) {
  throw new Error('MONGODB_URL is missing from your environment');
}

const client = new MongoClient(uri);
const db = client.db('bazardor');

export const auth = betterAuth({
  baseURL: process.env.BETTER_AUTH_URL,
  secret: process.env.BETTER_AUTH_SECRET,
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {
    enabled: true,
  },
});
