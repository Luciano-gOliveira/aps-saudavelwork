const express = require('express');
const useragent = require('express-useragent');
const app = express();

app.use(useragent.express());

app.get('/', (req, res) => {
  if (req.useragent.isMobile) {
    res.sendFile(__dirname + '/frontend/mobile/index.html');
  } else {
    res.sendFile(__dirname + '/frontend/desktop/index.html');
  }
});

app.get('/style.css', (req, res) => {
  if (req.useragent.isMobile) {
    res.sendFile(__dirname + '/frontend/mobile/style.css');
  } else {
    res.sendFile(__dirname + '/frontend/desktop/style.css');
  }
});

app.get('/script.js', (req, res) => {
  if (req.useragent.isMobile) {
    res.sendFile(__dirname + '/frontend/mobile/script.js');
  } else {
    res.sendFile(__dirname + '/frontend/desktop/script.js');
  }
});


const port = 3000;
app.listen(port, () => console.log(`Servidor Express em execução na porta ${port}`));
