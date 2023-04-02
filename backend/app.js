//import express package(module)
const express = require("express");
//import body-parser module 
const bodyParser = require("body-parser");
//import mongoose module
const bodyparser = require ("body-parser");
//import mongoose module
const mongoose = require ("mongoose");
//enetcomDB: DB name
mongoose.connect("mongodb://localhost:27017/enetcomDB");
//import Match model 
const Match = require ("./models/match");
//import Player model 
const Player = require ("./models/player");
//import Team model 
const Team = require ("./models/team");
//create express application 
const app = express();
// configure APP with bodyparser to send response => JSON
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
// Data Base (fake)
var matchesTab = [
    { id: 1, scoreOne: 1, scoreTwo: 2, teamOne: "AUS", teamTwo: "ARG" },
    { id: 2, scoreOne: 1, scoreTwo: 0, teamOne: "TUN", teamTwo: "FRA" },
    { id: 3, scoreOne: 6, scoreTwo: 2, teamOne: "ENG", teamTwo: "IRN" },
];
var playersTab = [
    { id: 1, name: "Messi", nbr: 10, position: "ATK" },
    { id: 2, name: "CR7", nbr: 7, position: "MID" },
    { id: 3, name: 6, nbr: 7, position: "MID", age: 38 },
];
var teamsTab = [
    { id: 1, name: "AUS" },
    { id: 2, name: "TUN" },
    { id: 3,name: "ENG" },
];
//Business Logic : REQ 1 => Get all Matches
app.get("/matches", (req, res) => {
    console.log("Here BL: REQ to get all matches");
    Match.find().then(
        (docs)=>{
            res.json({matches: docs});
        }
    );
    // res.json({ matches: matchesTab });
});
//Business Logic : REQ 2 => Get all players
app.get("/players", (req, res) => {
    console.log("Here BL: REQ to get all players");
    // res.json({ players: playersTab });
    Player.find().then(
        (docs)=>{
            res.json({players: docs});
        }
    );
});
//Business Logic : REQ 3 => Get all teams
app.get("/teams", (req, res) => {
    console.log("Here BL: REQ to get all teams");
    // res.json({ teams: teamsTab });
    Team.find().then(
        (docs)=>{
            res.json({teams: docs});
        }
    );
});
//Business Logic : REQ 4 => Get One Match By ID (:id=>un parametre)
app.get("/matches/:id", (req, res) => {
    console.log("Here BL: REQ to get One Match By ID");
    var id = req.params.id;
    Match.findOne({_id: id}).then(
        (doc)=>{
            res.json({match: doc});
        }
    )
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == id) {
    //         res.json({ match: matchesTab[i] });
    //         break;
    //     }
    // }
    // res.json({ message: `Match N° ${id} n'existe pas` });
});
//Business Logic : REQ 5 => Get One player By ID (:id=>un parametre)
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
//Business Logic : REQ 6 => Get One team By ID (:id=>un parametre)
app.get("/teams/:id", (req, res) => {
    console.log("Here BL: REQ to get One team By ID");
    var id = req.params.id;
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamssTab[i].id == id) {
            res.json({ team: teamsTab[i] });
            break;
        }
    }
    res.json({ message: `team N° ${id} n'existe pas` });
});
//Business Logic : REQ 7 => Delete One Match By ID (:id=>un parametre)
app.delete("/matches/:id", (req, res) => {
    // console.log("Here BL: REQ to delete One Match By ID");
    var id = req.params.id;
    Match.deleteOne({_id: id}).then(
        (x)=>{
            console.log("Here response from DB",response);
            res.json({message: "Deleted with success"});
        }
    )
    // for (let i = 0; i < matchesTab.length; i++) {
    //     if (matchesTab[i].id == id) {
    //         matchesTab.splice(i, 1);
    //         res.json({ message: `Match N° ${id} deleted with success` });
    //         break;
    //     }

    // }
    // res.json({ message: `Match N° ${id} n'existe pas` });
});
//Business Logic : REQ 8 => Delete One Player By ID (:id=>un parametre)
app.delete("/players/:id", (req, res) => {
    console.log("Here BL: REQ to delete One Match By ID");
    var id = req.params.id;
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == id) {
            playersTab.splice(i, 1);
            res.json({ message: `player N° ${id} deleted with success` });
            break;
        }

    }
    res.json({ message: `player N° ${id} n'existe pas` });
});
//Business Logic : REQ 9 => Delete One team By ID (:id=>un parametre)
app.delete("/teams/:id", (req, res) => {
    console.log("Here BL: REQ to delete One team By ID");
    var id = req.params.id;
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == id) {
            teamsTab.splice(i, 1);
            res.json({ message: `team N° ${id} deleted with success` });
            break;
        }

    }
    res.json({ message: `team N° ${id} n'existe pas` });
});
//Business Logic : REQ 10 => Add Match
app.post("/matches", (req, res) => {
    console.log("Here BL: REQ to add matche", req.body);
    let matchObj = new Match(req.body);
    matchObj.save();
    // matchesTab.push(req.body);
    res.json({message:"Match Added with success"});
});
//Business Logic : REQ 11 => Add Player
app.post("/players", (req, res) => {
    console.log("Here BL: REQ to add player", req.body);
    let playerObj = new player(req.body);
    playerObj.save();
    // playersTab.push(req.body);
    res.json({message:"player Added with success"});
});
//Business Logic : REQ 12 => Add Team
app.post("/teams", (req, res) => {
    console.log("Here BL: REQ to add team", req.body);
    let teamObj = new team(req.body);
    teamObj.save();
    // teamsTab.push(req.body);
    res.json({message:"team Added with success"});
});
//Business Logic : REQ 13 => Edit Match
app.put("/matches/:id", (req, res) => {
    // console.log("Here BL: REQ to Edit One Match By ID");
    var id = req.params.id;
    Match.updateOne({_id: id},req.body).then(
        (response)=>{
            res.json({message: "updated with success"});
        }
)
})
//     for (let i = 0; i < matchesTab.length; i++) {
//         if (matchesTab[i].id == id) {
//             matchesTab[i]=req.body;
//             res.json({ message: `Match N° ${id} modified with success` });
//             break;
//         }
//     }
//     res.json({ message: `Match N° ${id} n'existe pas` });
// });
//Business Logic : REQ 14 => Edit player
app.put("/players/:id", (req, res) => {
    console.log("Here BL: REQ to Edit One player By ID");
    var id = req.params.id;
    for (let i = 0; i < playersTab.length; i++) {
        if (playersTab[i].id == id) {
            playersTab[i]=req.body;
            res.json({ message: `player N° ${id} modified with success` });
            break;
        }
    }
    res.json({ message: `player N° ${id} n'existe pas` });
});
//Business Logic : REQ 15 => Edit team
app.put("/teams/:id", (req, res) => {
    console.log("Here BL: REQ to Edit One team By ID");
    var id = req.params.id;
    for (let i = 0; i < teamsTab.length; i++) {
        if (teamsTab[i].id == id) {
            teamsTab[i]=req.body;
            res.json({ message: `team N° ${id} modified with success` });
            break;
        }
    }
    res.json({ message: `team N° ${id} n'existe pas` });
});
// make app importable
module.exports = app;