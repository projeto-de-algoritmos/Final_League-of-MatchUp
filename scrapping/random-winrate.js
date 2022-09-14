const fs = require('fs');
var obj = require("./winrate.json")

let shuffled = obj
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)

Objreverse = JSON.stringify(shuffled)
fs.writeFile("randomWinrate.json", Objreverse, 'utf8', function (err) {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
 
    console.log("JSON file has been saved.");
});