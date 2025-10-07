import mongoose from "mongoose";

const connectDB = async () => {
    try {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        serverSelectionTimeoutMS: 5000,
    });
    console.log("Connected");
} catch (error) {
    console.error("Connection Failed:", error.message);
    process.exit(1);
}
};

export default connectDB;