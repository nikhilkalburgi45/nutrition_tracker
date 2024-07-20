import mongoose from "mongoose"; // Importing mongoose for schema definition

const trackingSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    foodId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Food",
      required: true,
    },
    details: {
      calories: Number,
      protein: Number,
      carbohydrates: Number,
      fat: Number,
      fiber: Number,
    },
    eatenDate: {
      type: String,
      default: new Date().toLocaleDateString(),
    },
    quantity: {
      type: Number,
      min: 1,
      required: true,
    },
  },
  { timestamps: true }
);

const trackingModel = mongoose.model("Tracking", trackingSchema);

export default trackingModel;
