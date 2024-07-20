import bcrypt from "bcryptjs"; 
import jwt from "jsonwebtoken";
import userModel from "../models/userModel.js";

// Register user
const registerUser = async (req, res) => {
  const user = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);
    user.password = hashedPassword;
    const doc = await userModel.create(user);
    res.status(201).send({ message: "User Registered" });
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem" });
  }
};

// Login user
const loginUser = async (req, res) => {
  const userCred = req.body;
  try {
    const user = await userModel.findOne({ email: userCred.email });
    if (user !== null) {
      const isMatch = await bcrypt.compare(userCred.password, user.password);
      if (isMatch) {
        const token = jwt.sign({ email: userCred.email }, "nutrifyapp");
        res.send({
          message: "Login Success",
          token,
          userid: user._id,
          name: user.name,
        });
      } else {
        res.status(403).send({ message: "Incorrect password" });
      }
    } else {
      res.status(404).send({ message: "Invalid Email" });
    }
  } catch (err) {
    console.log(err);
    res.status(500).send({ message: "Some Problem" });
  }
};

export default { registerUser, loginUser };
