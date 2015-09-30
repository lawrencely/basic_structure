var express = require('express');

var app = express();

app.set('views', './app/views');
app.set('view engine', 'ejs');

app.use(express.static('./public'));

require('./app/routes/index.routes.js')(app);

app.listen(3001);

