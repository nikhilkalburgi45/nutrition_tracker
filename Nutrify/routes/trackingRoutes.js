import express from "express"; // Importing necessary modules and controllers
import trackingController from "../controllers/trackingController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

// Track food route
router.post("/track", verifyToken, trackingController.trackFood);

// Get foods by user and date route
router.get("/track/:userid/:date", trackingController.getFoodsByUserAndDate);

export default router;
