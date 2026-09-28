import express from "express";
import notesRoute from "./routes/noteRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"

dotenv.config()
connectdb()

const app = express();
//middle ware
app.use(cors())
app.use(express.json())

app.use("/api/notes", notesRoute);




app.listen(5001, () => {
  console.log("Server started on port 5001!"); 
});


