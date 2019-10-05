const fetch = require("node-fetch");
const galaxies = require("./data/galaxies.json");
const url = "http://localhost:8080/galaxies";

for (let i = 0; i < galaxies.length; i++) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(galaxies[i]),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => console.log(res));
}
console.log("you are here!!");
