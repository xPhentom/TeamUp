var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.engine('html', require('ejs').renderFile);

app.use(express.static(__dirname + '/static'));
app.use('/style', express.static(__dirname + '/node_modules/bigfishtv-turret/dist/'));

app.get('/', function (req, res) {
    res.render('index.ejs');
});

app.listen(3000, function () {
    console.log('Listening on port 3000')
});