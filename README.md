# 🌿 Fotoyu Backend (Node.js + Express + MongoDB)

The backend service for the **Fotoyu (Tree Spotter)** mobile app.  
This API handles location data, file uploads, and persistent storage using **MongoDB Atlas** or local JSON fallback.

---

## 📂 Project Structure

backend/
├── server.js # Entry point
├── db/
│ └── connect.js # MongoDB connection
├── routes/
│ └── locationRoutes.js # API routes
├── controllers/
│ └── locationController.js # Business logic
├── models/
│ └── locationModel.js # Mongoose schema
├── uploads/ # Uploaded images
├── data/
│ └── locations.json # Optional dummy fallback
└── .env # Environment variables


---

## ⚙️ Setup & Installation

### 1️⃣ Prerequisites
- Node.js ≥ 18
- npm
- MongoDB Atlas account (or local Mongo instance)

---

### 2️⃣ Installation

```bash
cd backend
npm install
3️⃣ Environment Configuration

Create a .env file in the backend/ directory:

PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@fotoyu.mongodb.net/?retryWrites=true&w=majority


Replace <username> and <password> with your MongoDB credentials.

4️⃣ Run the Server
npm start


The backend will run at:

http://localhost:5000


When deployed to Railway (example production):

https://fotoyu-backend-production.up.railway.app

🧩 API Endpoints
Method	Endpoint	Description
GET	/api/locations	Fetch all stored locations
POST	/api/locations	Add new location (supports image upload via multipart/form-data)
📦 Example: Add Location (cURL)
curl -X POST https://fotoyu-backend-production.up.railway.app/api/locations \
  -F "name=Example Tree" \
  -F "description=Beautiful banyan tree" \
  -F "latitude=-6.982" \
  -F "longitude=110.414" \
  -F "type=Tree" \
  -F "photo=@/path/to/image.jpg"

🧠 Technologies Used
Package	Description
express	REST framework
mongoose	ODM for MongoDB
multer	File uploads
cors	Cross-Origin support
dotenv	Environment management
🛠 Error Handling

Returns standard HTTP status codes.

Logs errors to console (can be integrated with logging services like Sentry).

🚀 Deployment Guide

Deployed easily using Railway, Render, or Vercel Serverless Functions.

Example Railway build command:

npm install && npm start

🧾 License

MIT © 2025 Fotoyu Project
