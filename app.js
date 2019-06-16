const express = require('express');
const app = express();
const serv = require('http').Server(app);
const io = require('socket.io')(serv, {});
const port = process.env.PORT || 3000;
const bodyParser = require('body-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, './public')))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

serv.listen(port, function () {
    console.log('Listening to port: ' + port);
});
