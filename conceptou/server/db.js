const mongoose = require("mongoose")
const MONGO_KEY = "your mongo key"

const URL =
  `your database`;

const connectmongodb = () => {
    mongoose.connect(URL, { useNewUrlParser: true });
  console.log("Connected to MongoDB",URL)
};

module.exports = connectmongodb;