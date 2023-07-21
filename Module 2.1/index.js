const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

let users = [
  { id: 1, name: 'Taufik' },
  { id: 2, name: 'Mulyawan' },
];

app.get('/users', (req, res) => {
  res.cookie('cookieName', 'cookieValue');
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = req.body;
  users.push(newUser);
  res.cookie('cookieName', 'cookieValue');
  res.status(201).json("success add data");
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  if (!user) {
    res.cookie('cookieName', 'cookieValue');
    res.status(404).json({ error: 'User not found' });
  } else {
    res.cookie('cookieName', 'cookieValue');
    res.json(user);
  }
});

app.put('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const updatedUser = req.body;
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    res.cookie('cookieName', 'cookieValue');
    res.status(404).json({ error: 'User not found' });
  } else {
    users[index] = { ...users[index], ...updatedUser };
    res.cookie('cookieName', 'cookieValue');
    res.json("success edit data");
  }
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex((u) => u.id === id);
  if (index === -1) {
    res.cookie('cookieName', 'cookieValue');
    res.status(404).json({ error: 'User not found' });
  } else {
    const deletedUser = users.splice(index, 1)[0];
    res.cookie('cookieName', 'cookieValue');
    res.json("success delete data");
  }
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});