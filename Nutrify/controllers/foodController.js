import foodModel from "../models/foodModel.js"; // Importing necessary modules

// Get all foods
const getAllFoods = async (req, res) => {
  try {
    const foods = await foodModel.find();
    res.send(foods);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem while getting info" });
  }
};

// Get food by name
const getFoodByName = async (req, res) => {
  try {
    const foods = await foodModel.find({
      name: { $regex: req.params.name, $options: "i" },
    });
    if (foods.length !== 0) {
      res.send(foods);
    } else {
      res.status(404).send({ message: "Food Item Not Found" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem in getting the food" });
  }
};

export default { getAllFoods, getFoodByName };
