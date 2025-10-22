// Create a new router
const express = require("express");
const router = express.Router();

// Handle the routes
//Home page
router.get("/", (req, res) => res.send("Hello World!")); 

//About page
router.get('/about', (req, res) => res.send ('<h1>This is about page</h1>'));

//Contact page
router.get('/contact', (req, res) => res.send ('<h1>Contact</h1><pn>Email: amoha045@gold.ac.uk</p>'));

//Date page
router.get('/date', (req, res) => res.send(`<!doctype html>
<html>
  <head><meta charset="utf-8"><title>Date</title></head>
  <body>
    <h1>Current Date and Time</h1>
    <h2 id="t"></h2>
    <script>
      function update(){ t.textContent = new Date().toLocaleString(); }
      update(); setInterval(update, 1000);
    </script>
  </body>
</html>`));

//Welcome page
router.get("/welcome/:name", (req, res) => {
  const raw = req.params.name;                 // take the name from the URL
  const name = raw.charAt(0).toUpperCase() + raw.slice(1); 
  res.send(`<h1>Welcome ${name}</h1>`);
});

//Chaining two handler using next()
router.get('/chain',
  (req, res, next) => {
    res.locals.msg = 'Hello';  
    next();                   
  },
  (req, res) => {
    res.send(`${res.locals.msg} from handler 2`); 
  }
);

// Send an actual HTML file back
const path = require('path');

router.get('/file', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'a.html'));
});
// Export the router object so index.js can access it
module.exports = router;
