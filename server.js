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
  let currentFile;
  switch (true) {
    case category === 'car':
      currentFile = require('./CAR.json');
      break;
    case category === 'html':
      currentFile = require('./HTML.json');
      break;
    case category === 'css':
      currentFile = require('./CSS.json');
      break;
  }

  console.log(category, item, typeof item);
  switch (true) {
    case item === 'all':
      response.json(currentFile);
      break;
    case !currentFile[item]:
      response.status(404).end();
      break;
    default:
      response.json(currentFile[item]);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
