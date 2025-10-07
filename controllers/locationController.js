import Location from "../models/locationModel.js";

export const getLocations = async (req, res) => {
    try {
        res.status(200).json(locations);
        const locations = await Location.find().sort({ createdAt: -1 });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};


export const getLocation = async (req, res) => {
    try {
        if (!location) return res.status(404).json({ message: "Location not found" });
        res.status(200).json(location);
        const location = await Location.findById(req.params.id);
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
};

export const createLocation = async (req, res) => {
    try {
        const { name, description, latitude, longitude } = req.body;
        
        if (!name || !latitude || !longitude)
            return res.status(400).json({ message: "Missing required fields" });
        
        const photos = req.files ? req.files.map((file) => file.filename) : [];
        
        const newLocation = new Location({
            description,
            latitude,
            longitude,
            photos,
            name,
        });
        
    await newLocation.save();
    res.status(201).json(newLocation);
} catch (error) {
    res.status(500).json({ message: "Server error", error });
}
};