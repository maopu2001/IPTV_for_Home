import express from 'express';
import handleData from './dataHandler.mjs';

const app = express();

app.get('/api', async (req, res) => {
  const data = await handleData();
  console.log('Response sent');
  res.send(data);
});

app.listen(3000, async () => {
  console.log('Server is running on port 3000');
});
