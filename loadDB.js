const fetch = require("node-fetch");
const planets = require("./data/planets.json");
const url = "http://localhost:8080/planets";

for (let i = 0; i < planets.length; i++) {
  fetch(url, {
    method: "POST",
    body: JSON.stringify(planets[i]),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(res => console.log(res));
}
console.log("you are here!!");
