const express = require('express');
const bodyParser = require('body-parser');

const routes = require('../routes')
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/exchange', routes)
app.use(express.json())


app.get("/", (req, res) => {
    res.json({ message: "Welcome to  application." });
  });
  
  
  
  // set port, listen for requests
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
  });