const mongoose = require("mongoose");
const teamSchema = mongoose.Schema({
    name: String,
    country: String,
    foundation: Number,
    stadium: String,
});
//model name: "team"(PascalCase)
const team = mongoose.model("Team", teamSchema);
module.exports = team;