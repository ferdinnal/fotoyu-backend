import {
    Location
} from "../models/locationModel.js";

export const getLocations = async (req, res) => {
    try {
        const locations = await Location.find();
        res.json(locations);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};

export const createLocation = async (req, res) => {
    try {
        const {
            name,
            description,
            latitude,
            longitude
        } = req.body;
        const photos = req.files ? req.files.map((f) => f.filename) : [];

        const newLocation = await Location.create({
            name,
            description,
            latitude,
            longitude,
            photos,
        });

        res.status(201).json(newLocation);
    } catch (err) {
        res.status(500).json({
            message: err.message
        });
    }
};