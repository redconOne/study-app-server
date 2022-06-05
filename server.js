const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors());

app.get('/', (request, response) => {
  console.log(request.baseUrl, request.params, request.path, request.query);
  response.sendFile(__dirname + '/index.html');
});
app.get('/css/style.css', (request, response) => {
  console.log('getting css');
  response.sendFile(__dirname + '/css/style.css');
});
app.get('/api/:category/:item', (request, response) => {
  const category = request.params.category.toLowerCase();
  const item = request.params.item.toLowerCase();
  console.log(category, item);

  if (item === 'all') {
    if (category === 'car') {
      let dbPath = require('./CAR.json');
      response.json(dbPath);
    }
  }
  if (category === 'car') {
    if (CAR[item]) response.json(CAR[item]);
    else response.json(CAR.rip);
  } else response.json(CAR.rip);
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
