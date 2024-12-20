const express = require('express');
const app = express();
app.get('/', async (req, res) => {
  //Simulate a long-running task asynchronously
  const sum = await new Promise(resolve => {
    let sum = 0;
    setTimeout(() => {
      for (let i = 0; i < 1000000000; i++) {
        sum += i;
      }
      resolve(sum);
    }, 0); 
  });
  res.send('Hello from Express!');
});
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});