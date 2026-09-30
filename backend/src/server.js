import express from "express";
import notesRoute from "./routes/noteRoutes.js";
import { connectdb } from "./config/db.js";
import dotenv from "dotenv"
import cors from "cors"
import helmet from "helmet";

dotenv.config()
connectdb()

const frontendUrl = process.env.FRONTEND_URL

const app = express();
app.use(helmet())
app.use(cors(
  {
    origin : frontendUrl,
    credentials : true
  }
))
//middle ware 
app.use(express.json())

app.use("/api/notes", notesRoute);




app.listen(5001, () => {
  console.log("Server started on port 5001!"); 
});


