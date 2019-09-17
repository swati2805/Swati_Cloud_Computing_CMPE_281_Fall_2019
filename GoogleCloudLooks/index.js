var express = require('express');
var app = express();

const fetch = require('node-fetch');

console.log("swati");

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(bodyParser.json())

app.get('/', function (req, res) {
    res.sendFile('index.html', {root: __dirname });
    //res.setHeader('content-type', 'text/html');
    //res.send('<h1>Hello World</h1>');
});

app.post('/img_link', function (req, res) {
    res.setHeader('content-type', 'application/json');
    const img = req.body.abc;
    const { URLSearchParams } = require('url');
 
    const params = new URLSearchParams();
    params.append('img_link', img);

    fetch('http://nihalkonda.com/AllFolders/GoogleCloudVisionAI/rest.php', { method: 'POST', body: params })
        .then(resp => resp.json())
        .then(json => res.send(json));
    console.log(img);
    
});

app.listen( process.env.PORT || 3000 , function () {
  console.log('Example app listening on port '+(process.env.PORT || 3000)+'!');
    
    /*
    ref.once("value", function(snapshot) {
      console.log(snapshot.val());
    });
    */
    
    const img = 'https://fyf.tac-cdn.net/images/products/large/BF116-11KM.jpg?auto=webp&quality=60';
    
    const { URLSearchParams } = require('url');
 
    const params = new URLSearchParams();
    params.append('img_link', img);

    fetch('http://nihalkonda.com/AllFolders/GoogleCloudVisionAI/rest.php', { method: 'POST', body: params })
        .then(res => res.json())
        .then(json => console.log(json));
   
});