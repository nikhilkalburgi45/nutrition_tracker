import express from "express"; // Importing necessary modules and controllers
import foodController from "../controllers/foodController.js";
import verifyToken from "../middlewares/authMiddleware.js";

const router = express.Router();

// Get all foods route
router.get("/", verifyToken, foodController.getAllFoods);

// Get food by name route
router.get("/:name", verifyToken, foodController.getFoodByName);

export default router;
