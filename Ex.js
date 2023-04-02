//import express package(module)
const express = require("express");
//import body-parser module 
const bodyParser = require("body-parser");
//create express application 
const app = express();
// configure APP with bodyparser to send response => JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// Data Base (fake)
var teamesTab = [
    { id: 1, name: "AUS" },
    { id: 2, teamOne: "TUN" },
    { id: 3,name: "ENG" },
];
var playersTab = [
    { id: 1, name: "Messi", nbr: 10, position: "ATK" },
    { id: 2, name: "CR7", nbr: 7, position: "MID" },
    { id: 3, name: 6, nbr: 7, position: "MID", age: 38 },
];
//Business Logic : REQ 1 => Get all teams
app.get("/teams", (req, res) => {
    console.log("Here BL: REQ to get all teams");
    res.json({ teames: teamesTab });
});
//Business Logic : REQ 2 => Get all players
app.get("/players", (req, res) => {
    console.log("Here BL: REQ to get all players");
    res.json({ players: playersTab });
});
//Business Logic : REQ 3 => Get One team By ID (:id=>un parametre)
app.get("/teams/:id", (req, res) => {
    console.log("Here BL: REQ to get One team By ID");
    var id = req.params.id;
    for (let i = 0; i < teamesTab.length; i++) {
        if (teamssTab[i].id == id) {
            res.json({ team: teamesTab[i] });
            break;
        }
    }
    res.json({ message: `team N° ${id} n'existe pas` });
});
//Business Logic : REQ 4 => Get One player By ID (:id=>un parametre)
app.get("/players/:id", (req, res) => {
    console.log("Here BL: REQ to get One player By ID");
    var id = req.params.id;
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == id) {
            res.json({ player: playersTab[i] });
            break;
        }
    }
    res.json({ message: `player N° ${id} n'existe pas` });
});
//Business Logic : REQ 5 => Delete One team By ID (:id=>un parametre)
app.delete("/teames/:id", (req, res) => {
    console.log("Here BL: REQ to delete One team By ID");
    var id = req.params.id;
    for (let i = 0; i < teamesTab.length; i++) {
        if (teamesTab[i].id == id) {
            teamesTab.splice(i, 1);
            res.json({ message: `team N° ${id} deleted with success` });
            break;
        }

    }
    res.json({ message: `team N° ${id} n'existe pas` });
});
//Business Logic : REQ 6 => Add team
app.post("/teames", (req, res) => {
    console.log("Here BL: REQ to add team", req.body);
    teamesTab.push(req.body);
    res.json({message:"team Added with success"});
});
// make app importable
module.exports = app;