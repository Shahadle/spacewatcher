import express from 'express';
import cors from 'cors';

const app = express();
const port = 3000;
const weatherApiKey = process.env.WEATHER_API_KEY;

app.use(cors({
  origin:"*"
}));

app.get('/', (req, res) => {
  res.send('404');
});

app.get('/api/v1/astronomy', async (req, res) => {
  const query = req.query.query;
  const dateTime = req.query.dateTime;
  const params = new URLSearchParams();
  params.set('q', query);
  params.set('dt', dateTime);
  params.set('key', weatherApiKey);
  const response = await fetch(`https://api.weatherapi.com/v1/astronomy.json?${params}`);
  res.json(await response.json());
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});

