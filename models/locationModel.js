import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    latitude: Number,
    longitude: Number,
    photos: [String],
    createdAt: {
        type: Date,
        default: Date.now
    },
});

export const Location = mongoose.model("Location", locationSchema);