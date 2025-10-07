import express from "express";
import multer from "multer";
import {
    getLocations,
    getLocation,
    createLocation,
} from "../controllers/locationController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    },
});

const upload = multer({
    storage
});

router.get("/", getLocations);
router.get("/:id", getLocation);
router.post("/", upload.array("photos", 5), createLocation);

export default router;