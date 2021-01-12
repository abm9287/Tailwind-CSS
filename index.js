const express = require('express');
const morgan = require('morgan');
const app = express();


app.use(express.static(__dirname + '/public/'));


app.use(morgan('combined'));
app.listen('3000', function() {
    console.log('Servidor web escuchando en el puerto 3000');
  });