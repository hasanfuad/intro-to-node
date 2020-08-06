//jshint esversion:6

// const fs = require("fs");

// fs.copyFileSync("file1.txt", "file2.txt");


var superheroes = require("superheroes");

var myhero = superheroes.random();

var supervillains = require("supervillains");

var myvillain = supervillains.random();

console.log(myvillain);

console.log(myhero);

