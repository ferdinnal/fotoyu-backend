import fs from "fs";
import path from "path";
import {
    fileURLToPath
} from "url";
import Location from "../models/locationModel.js";

const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename);

export const getLocations = async (req, res) => {
    try {
        let locations = await Location.find();

        if (locations.length === 0) {
            const dataPath = path.join(__dirname, "../data/locations.json");
            const dummy = JSON.parse(fs.readFileSync(dataPath, "utf8"));

            await Location.insertMany(dummy);
            locations = await Location.find();
            console.log("🌳 Dummy data (Semarang) telah dimasukkan ke database!");
        }

        res.json(locations);
    } catch (err) {
        console.error("Error fetching locations:", err);
        res.status(500).json({
            message: err.message
        });
    }
};

export const addLocation = async (req, res) => {
    try {
        const {
            name,
            description,
            latitude,
            longitude,
            type
        } = req.body;
        const photoPath = req.file ? `/uploads/${req.file.filename}` : null;

        const newLocation = new Location({
            name,
            description,
            latitude,
            longitude,
            type: type || "Tree",
            photos: photoPath ? [photoPath] : [],
        });

        await newLocation.save();
        res.status(201).json(newLocation);
    } catch (err) {
        console.error("Error adding location:", err);
        res.status(500).json({
            message: err.message
        });
    }
};