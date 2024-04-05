"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
// MongoDB connection URI
const uri = "mongodb+srv://vhantakishima:lupin0010@todolist.m4f2aft.mongodb.net/"; // Update this with your MongoDB URI
const client = new mongodb_1.MongoClient(uri);
function connectToDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Connect to MongoDB
            yield client.connect();
            console.log("Connected to MongoDB");
            // Return the database instance
            return client.db("Task"); // Update with your database name
        }
        catch (error) {
            console.error("Error connecting to MongoDB:", error);
            throw error;
        }
    });
}
// Function to insert a document
function insertDocument(db, collectionName, document) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = db.collection(collectionName);
        yield collection.insertOne(document);
        console.log("Document inserted successfully");
    });
}
// Function to find documents
function findDocuments(db_1, collectionName_1) {
    return __awaiter(this, arguments, void 0, function* (db, collectionName, query = {}) {
        const collection = db.collection(collectionName);
        const cursor = collection.find(query);
        const documents = yield cursor.toArray();
        return documents;
    });
}
// Function to update a document
function updateDocument(db, collectionName, filter, update) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = db.collection(collectionName);
        yield collection.updateOne(filter, { $set: update });
        console.log("Document updated successfully");
    });
}
// Function to delete a document
function deleteDocument(db, collectionName, filter) {
    return __awaiter(this, void 0, void 0, function* () {
        const collection = db.collection(collectionName);
        yield collection.deleteOne(filter);
        console.log("Document deleted successfully");
    });
}
// Usage example
(() => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const db = yield connectToDatabase();
        // Insert example
        yield insertDocument(db, "Task", { name: "John", age: 30 });
        // Find example
        const documents = yield findDocuments(db, "Task");
        console.log("Found documents:", documents);
        // Update example
        yield updateDocument(db, "Task", { name: "John" }, { age: 35 });
        // Delete example
        yield deleteDocument(db, "Task", { name: "John" });
        // Close connection
        yield client.close();
    }
    catch (error) {
        console.error("Error:", error);
    }
}))();
