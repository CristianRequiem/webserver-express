const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

// Asignar dinámicamente valor al puerto
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials', (err) => { console.log });
app.set('view engine', 'hbs');

app.get('/', function(req, res) {
    res.render('home.hbs', {
        nombre: 'Cristian'
    });
});

app.get('/about', function(req, res) {
    res.render('about.hbs', {
        nombre: 'Cristian'
    });
});

app.listen(port, () => {
    console.log(`Servidor levantado en el puerto ${port}`);
});