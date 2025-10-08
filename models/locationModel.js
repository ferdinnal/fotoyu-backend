import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    latitude: Number,
    longitude: Number,
    type: {
        type: String,
        enum: ["Tree", "Spot"],
        default: "Tree"
    },
    photos: [String],
});

const Location = mongoose.model("Location", locationSchema);
export default Location;