import trackingModel from "../models/trackingModel.js"; // Importing necessary modules

// Track a food
const trackFood = async (req, res) => {
  const trackData = req.body;
  try {
    const data = await trackingModel.create(trackData);
    console.log(data);
    res.status(201).send({ message: "Food Added" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem in adding the food" });
  }
};

// Get foods eaten by a user on a specific date
const getFoodsByUserAndDate = async (req, res) => {
  const userid = req.params.userid;
  const date = new Date(req.params.date);
  const strDate =
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();

  try {
    const foods = await trackingModel
      .find({ userId: userid, eatenDate: strDate })
      .populate("userId")
      .populate("foodId");
    res.send(foods);
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem in getting the food" });
  }
};

export default { trackFood, getFoodsByUserAndDate };
