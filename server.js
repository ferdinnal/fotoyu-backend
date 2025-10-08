import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import {
    fileURLToPath
} from "url";
import {
    connectDB
} from "./db/connect.js";
import locationRoutes from "./routes/locationRoutes.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/locations", locationRoutes);

// Default route
app.get("/", (req, res) => {
    res.send("🌳 Fotoyu API is running!");
});

// Start server
connectDB().then(() => {
    app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
});