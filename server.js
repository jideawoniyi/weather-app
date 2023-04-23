const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();


const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use(express.static('website'));

const port = 3000;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

let projectData = {};

app.get('/data', (req, res) => {
  res.send(projectData);
});

app.post('/add', (req, res) => {
  projectData = {
    temperature: req.body.temperature,
    date: req.body.date,
    userResponse: req.body.userResponse,
  };
  res.send(projectData);
});
