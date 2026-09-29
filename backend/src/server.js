import express from "express";
import notesRoute from "./routes/noteRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet";

dotenv.config()
connectdb()

const app = express();
app.use(helmet())
app.use(cors())
//middle ware 
app.use(express.json())

app.use("/api/notes", notesRoute);




app.listen(5001, () => {
  console.log("Server started on port 5001!"); 
});


