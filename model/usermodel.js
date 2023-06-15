const chris = require("mongoose");
const userShema = chris.Schema({
  name: {
    type: String,
  },
  lifestyle: {
    type: String,
  },
  entertainment: {
    type: String,
  },
  sport: {
    type: String,
  },
  celebrities: {
    type: String,
  },
});

const userModel = chris.model("blog", userShema);

module.exports = userShema;
