const express = require('express');
const app = express();


const playlistRoute = require('./app/playlist/route');

const v1 = '/api'

app.use(express.json());
app.use(v1, playlistRoute);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});