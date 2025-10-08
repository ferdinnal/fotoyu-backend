import Location from "../models/locationModel.js";
import fs from "fs";

export const getLocations = async (req, res) => {
    try {
        const data = await Location.find();
        res.json(data);
    } catch (err) {
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

        let photoUrl = "";
        if (req.file) {
            photoUrl = `/uploads/${req.file.filename}`;
        }

        const newLocation = new Location({
            name,
            description,
            type,
            latitude,
            longitude,
            photos: photoUrl ? [photoUrl] : [],
        });

        const saved = await newLocation.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error("❌ Error saving location:", err);
        res.status(500).json({
            message: err.message
        });
    }
};