// import jwt from "jsonwebtoken";

// const auth = (req, res, next) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader && !authHeader.startsWith(`Bearer `)) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }
//   const token = authHeader.split(" ")[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET);
//     next();
//   } catch (error) {
//     res.status(401).json({ message: "Invalid Token" });
//   }

//   next();

//   res.status(200).json({ message: "auth" });
// };

// export default auth;

const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    return res.status(401).json({ message: "unauthorized" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = { userId: decoded.userId };
    console.log(decoded);
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid Token" });
  }
};
module.exports = auth;
