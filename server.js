const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
 
// app.get('/', (req, res) => {
//   res
//     .status(200)
//     .send('Hello server is running')
//     .end();
// });
// app.get("/", (req, res) => {
//     res.status(200).send("Hello World");
// });
 
app.get('/', function (req, res) {
 res.render('home');
})

app.get('/login', function (req, res) {
 res.render('login');
})

app.get('/register', function (req, res) {
 res.render('register');
})

app.get('/dashboard', function (req, res) {
 res.render('dashboard');
})

app.get('/room', function (req, res) {
 res.render('room');
})

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
  console.log('Press Ctrl+C to quit.');
});