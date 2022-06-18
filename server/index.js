
const express = require("express");
const fetch = require('node-fetch');

const app = express();

const port = 3001;

app.use(function (req, res, next) {

  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  next();
});


app.get("/products/:market",  (req, res) => {
  console.log("Starting request to product");
  const market = req.params.market;
  const getUrl = (market) => {
    switch (market) {
      case 'es':
        return 'https://api-es.exoticca.com/api/home'
       case 'uk':
       return 'https://api-uk.exoticca.com/api/home'
      default:
        return 'https://api-es.exoticca.com/api/home'
    }
  }
  fetch(getUrl(market))
    .then(res => res.json())
    .then(json => {
        res.send(json);
})


  
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
