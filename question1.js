const express = require('express');
const app = express();




app.use(require('express-status-monitor')());


app.get('/', (req, res) => {
  res.send('hello');
});


app.listen(3000, () => {
  console.log('Server started on port 3000');
});

//npm init -y
//npm install express express-status-monitor
//http://localhost:3000
//http://localhost:3000/status