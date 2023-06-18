const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { body, validationResult } = require("express-validator");
const fetchUser = require("../middleware/fetchUser");
const JWT_SIGN = "jwtisagoodmethodtodothis@1234"

//ROUTE 1:creating a user
router.post(
  "/createUser",
  //validation checks
  [
    body("email", "enter a valid email").isEmail(),
    body("name", "enter a valid name").isLength({ min: 3 }),
    body("password", "enter a valid password").isLength({ min: 5 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //errors in validation result
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    //finding existing users
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res.status(400).json({ error: "User already exists" });
      }
      //create a new user
      const salt = await bcrypt.genSaltSync(10);
      const secPass = await bcrypt.hash(req.body.password, salt);
      user = await User.create({
        email: req.body.email,
        name: req.body.name,
        password: secPass,
      });
      //if succefull created
      const data = {
        user: {
          id: user.id,
        },
      };
      var token = jwt.sign(data, JWT_SIGN);
      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "some error occured" });
    }
  }
);

//ROUTE 2:login
router.post(
  "/login",
  //validation checks
  [
    body("email", "enter a valid email").isEmail(),
    body("password", "password can't be empty").exists(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    //errors in validation result
    if (!errors.isEmpty()) {
      res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Use correct login info" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ error: "User correct login info" });
      }
      const data = {
        user: {
          id: user.id,
        },
      };
      const token = jwt.sign(data, JWT_SIGN);
      res.json({ token });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ error: "some internal error occured" });
    }
  }
);

//ROUTE 3: MIDDLEWARE Login required POST

router.post("/getUser",fetchUser,async (req, res) => {
  const UserId = req.user.id;
  try {
    let user = await User.findById(UserId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "some internal error occured" });
  }
});
module.exports = router