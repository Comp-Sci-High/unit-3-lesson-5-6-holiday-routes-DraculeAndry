


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

// Comments on what's happening in this code:
// 1. When first entering the main page, the user is greeted with multiple pictures of bunnies.
// 2. The user can navigate to different pages using the links provided on the main page.
// 3. Each page provides different information about bunnies, such as breeds and fun facts. And another page where it gives even more fun facts.
// 4. If the user tries to go to a page that does not exist, the user is shown a 404 not found error page.

// Bunny carrot feeder:
// 1. The user can click on the carrot icon to feed the bunny.
// 2. When the carrot icon is clicked, a message is displayed indicating that the bunny is happy and has been fed a carrot.
// 3. This feature adds interactivity to the website and enhances the user experience.
// 4. It does this to encourage users to explore the site and learn more about bunnies in a fun way.