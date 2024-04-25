import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

export const collections: { education?: mongoDB.Collection } = {};

export async function connectToDatabase() {
  dotenv.config();

  const DATABASE_CONNECTION_STRING: string = process.env.DATABASE_CONNECTION_STRING!;

  const client: mongoDB.MongoClient = new mongoDB.MongoClient(
    DATABASE_CONNECTION_STRING
  );

  await client.connect();

  const DATABASE_NAME: string = process.env.DATABASE_NAME!;

  const database: mongoDB.Db = client.db(DATABASE_NAME);

  const EDUCATION_COLLECTION_NAME: string =
    process.env.EDUCATION_COLLECTION_NAME!;

  const educationCollection: mongoDB.Collection = database.collection(
    EDUCATION_COLLECTION_NAME
  );

  collections.education = educationCollection;

  console.log(
    `Successfully connected to database: ${database.databaseName} and collection: ${educationCollection.collectionName}`
  );
}