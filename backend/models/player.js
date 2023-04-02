const mongoose = require("mongoose");
const playerSchema = mongoose.Schema({
    name: String,
    nbr: Number,
    position: String,
});
//model name: "player"(PascalCase)
const player = mongoose.model("Player", playerSchema);
module.exports = player;