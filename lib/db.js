import { MongoClient } from 'mongodb';

export async function connectToDatabase() {
    const client = await MongoClient.connect('mongodb+srv://admin:admin@cluster0.gjbiy.mongodb.net/auth-demo?retryWrites=true&w=majority');

    return client;
}