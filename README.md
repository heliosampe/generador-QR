# QR Generator

Generador de códigos QR en node.js. Se implementan dos variantes:

  - Genera QR y guarda en un fichero /codigos/quewy.svg
  - Muestra el código en localhost:3000


### Version
1.0.0

### Dependencias
* qr-image :  ^3.1.0
* express: ^4.11.2 (Solo para publicar en web)

### Instalación
Necesitas tener instalado node.js. Puedes descargarlo desde www.nodejs.org.

Una vez instalado, clona el repositorio a una carpeta:

```sh
$ git clone https://github.com/ivanbtrujillo/QRGenerator-NodeJS Qr-Generator
$ cd Qr-Generator
$ npm install
```
### Cambio entre versiones
En el fichero index.js vienen las dos versiones. Cuando se ejecuta el servidor se genera un QR y se vuelga a un fichero .svg en la carpeta codigos. Posteriormente genera otro QR distinto y lo muestra en el browser en el browser.

### Salida a fichero
Genera un fichero .svg en la carpeta códigos. 

### Salida a localhost
Publica una web en localhost con el codigo QR. Localhost:3000

###Cambio de carpeta de salida
Modificar la salida en la variable output:
var output = fs.createWriteStream('codigos/quewy.svg')

### Cambio de la string que queremos generar con el QR
Modificar la string en la variable code:
var code = qr.image('Bienvenido a Quewy', { type: 'svg' });  

### Ejecución
```sh
npm start
```

