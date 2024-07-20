import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  const token = req.header("Authorization")?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "Access Denied" });
  }

  try {
    const verified = jwt.verify(token, "nutrifyapp");
    req.user = verified;
    next();
  } catch (err) {
    res.status(400).send({ message: "Invalid Token" });
  }
};

export default verifyToken;
