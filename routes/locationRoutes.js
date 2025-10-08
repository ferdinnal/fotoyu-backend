import express from "express";
import multer from "multer";
import path from "path";
import {
    getLocations,
    addLocation
} from "../controllers/locationController.js";

const router = express.Router();

// Konfigurasi penyimpanan gambar
const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    },
});

const upload = multer({
    storage
});

// Routes
router.get("/", getLocations);
router.post("/", upload.single("photo"), addLocation);

export default router;