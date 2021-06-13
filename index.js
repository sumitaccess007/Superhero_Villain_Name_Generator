const superheroes = require("superheroes");
const supervillains = require("supervillains");

var hero = superheroes.random();
var villain = supervillains.random();

console.log("Superhero Name - " + hero);
console.log("Supervillain Name -" + villain);
