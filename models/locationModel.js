import mongoose from "mongoose";

const locationSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    type: {
        type: String,
        enum: ["tree", "spot"],
        default: "tree"
    },
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    photos: [{
        type: String
    }],
}, {
    timestamps: true
});

export default mongoose.model("Location", locationSchema);