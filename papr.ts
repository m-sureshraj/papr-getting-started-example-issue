import mongodb, { MongoClient } from 'mongodb';
import Papr from 'papr';

export let client: MongoClient;

const papr = new Papr();

export async function connect() {
  client = await mongodb.MongoClient.connect('mongodb://localhost:27017', {
    useUnifiedTopology: true,
  });

  papr.initialize(client.db('papr'));
}

export async function disconnect() {
  await client.close();
}

export default papr;