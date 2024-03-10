// app.js
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let tasks = [];

app.get('/', (req, res) => {
  res.render('index', { tasks: tasks });
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  tasks.push(task);
  res.redirect('/');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
