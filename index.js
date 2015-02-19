//#########################################################

//Salida a fichero .svg en la ruta códigos

// var qr = require('qr-image');  
// var fs = require('fs');

// var code = qr.image('Bienvenido a Quewy', { type: 'svg' });  
// var output = fs.createWriteStream('codigos/quewy.svg')

// code.pipe(output); 

//#########################################################

// Salida por pantalla en servidor web. Puerto 3000 
// var qr = require('qr-image');  
// var express = require('express');

// var app = express();

// app.get('/', function(req, res) {  
//   var code = qr.image("Bienvenido a Quewy", { type: 'svg' });
//   res.type('svg');
//   code.pipe(res);
// });

// app.listen(3000); 