import mongoose from "mongoose";

const locationSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        description: { type: String },
        longitude: { type: Number, required: true },
        photos: { type: [String], default: [] },
        latitude: { type: Number, required: true },
    },
    { timestamps: true }
);

export default mongoose.model("Location", locationSchema);