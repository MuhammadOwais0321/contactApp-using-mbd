import express from "express";
import dotenv from "dotenv";
dotenv.config();
import { Contact } from "./models/contacts.models.js";
import router from "./routes/contacts.routes.js";
import { connectDB } from "./config/database.js";
const app = express();
const PORT = process.env.ENV_PORT;

// Database Connection
connectDB()

// Middlewares 

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

// Routes
app.use('/',router )

app.listen(PORT, () => {
  console.log(`
Server Started Successfully ctrl click on\nhttp://localhost:${PORT}`);
});
