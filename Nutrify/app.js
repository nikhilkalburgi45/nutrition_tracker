import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import foodRoutes from "./routes/foodRoutes.js";
import trackingRoutes from "./routes/trackingRoutes.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

// Connect to the database
connectDB();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/foods", foodRoutes);
app.use("/api/tracking", trackingRoutes);

export default app;
