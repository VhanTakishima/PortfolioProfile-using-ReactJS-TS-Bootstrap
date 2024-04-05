import { MongoClient, Db, ObjectId } from "mongodb";

// MongoDB connection URI
const uri =
  "mongodb+srv://vhantakishima:lupin0010@todolist.m4f2aft.mongodb.net/"; // Update this with your MongoDB URI
const client = new MongoClient(uri);

async function connectToDatabase() {
  try {
    // Connect to MongoDB
    await client.connect();
    console.log("Connected to MongoDB");

    // Return the database instance
    return client.db("Task"); // Update with your database name
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
}

// Function to insert a document
async function insertDocument(db: Db, collectionName: string, document: any) {
  const collection = db.collection(collectionName);
  await collection.insertOne(document);
  console.log("Document inserted successfully");
}

// Function to find documents
async function findDocuments(db: Db, collectionName: string, query: any = {}) {
  const collection = db.collection(collectionName);
  const cursor = collection.find(query);
  const documents = await cursor.toArray();
  return documents;
}

// Function to update a document
async function updateDocument(
  db: Db,
  collectionName: string,
  filter: any,
  update: any
) {
  const collection = db.collection(collectionName);
  await collection.updateOne(filter, { $set: update });
  console.log("Document updated successfully");
}

// Function to delete a document
async function deleteDocument(db: Db, collectionName: string, filter: any) {
  const collection = db.collection(collectionName);
  await collection.deleteOne(filter);
  console.log("Document deleted successfully");
}

// Usage example
(async () => {
  try {
    const db = await connectToDatabase();

    // Insert example
    await insertDocument(db, "Task", { name: "John", age: 30 });

    // Find example
    const documents = await findDocuments(db, "Task");
    console.log("Found documents:", documents);

    // Update example
    await updateDocument(
      db,
      "Task",
      { name: "John" },
      { age: 35 }
    );

    // Delete example
    await deleteDocument(db, "Task", { name: "John" });

    // Close connection
    await client.close();
  } catch (error) {
    console.error("Error:", error);
  }
})();
