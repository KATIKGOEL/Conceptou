const jwt = require("jsonwebtoken");
const JWT_SIGN = "jwtisagoodmethodtodothis@1234"

const fetchUser = (req, res, next) => {
  const token = req.header("auth-token");
  if (!token) {
    return res.status(401).send({ error: "Invalid token" });
  }
  try {
    const data = jwt.verify(token, JWT_SIGN);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).send({ error: "Invalid token" });
  }
};

module.exports = fetchUser;
