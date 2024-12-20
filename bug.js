const express = require('express');
const app = express();
app.get('/', (req, res) => {
  //Simulate a long-running task
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += i;
  }
  res.send('Hello from Express!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});