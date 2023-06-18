const mongoose = require("mongoose")
const MONGO_KEY = "gXMLwl8W3R6abzk5"

const URL =
  `mongodb+srv://karanxidhu:${MONGO_KEY}@cluster0.jwzjbnz.mongodb.net/?retryWrites=true&w=majority`;

const connectmongodb = () => {
    mongoose.connect(URL, { useNewUrlParser: true });
  console.log("Connected to MongoDB",URL)
};

module.exports = connectmongodb;