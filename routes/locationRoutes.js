import express from "express";
import multer from "multer";
import {
    getLocations,
    createLocation
} from "../controllers/locationController.js";

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, "uploads/"),
    filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const upload = multer({
    storage
});

router.get("/", getLocations);
router.post("/", upload.array("photos", 5), createLocation);

export default router;