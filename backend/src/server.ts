
import express, { Express } from "express";

const app = express();
const port = 5000;


app.get("/", (req,res)=> {
res.send("Hello, World");
});

app.listen(port, () => {
    console.log("server running on Port " + port)
});

// run npx nodemon src/server.ts