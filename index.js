


const express = require("express")
const app = express()

app.use(express.static(__dirname + "/public"))

app.get("/breeds", (req, res) => {
  res.sendFile(__dirname + "/public/breeds.html");
})

app.get("/funfacts", (req, res) => {
  res.sendFile(__dirname + "/public/funfacts.html");
})

app.get("/morefunfacts", (req, res) => {
  res.sendFile(__dirname + "/public/morefunfacts.html");
})

// Friendly 404 handler to avoid ENOENT crashes for missing pages
app.use((req, res) => {
  res.status(404).sendFile(__dirname + '/public/404.html');
});

app.listen(3000, () => {
  console.log(`The Bunny Rabbit Server is Running!`)
});
