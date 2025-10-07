import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import connectDB from "./db/connect.js";
import locationRoutes from "./routes/locationRoutes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// ES module helpers
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Connect to MongoDB Atlas
connectDB();

// Routes
app.use("/api/locations", locationRoutes);

// Health check
app.get("/", (req, res) => res.send("Fotoyu API (Atlas) is running!"));

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));