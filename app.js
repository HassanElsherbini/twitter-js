const app = require('express')();
const routes = require('./routes/index.js');
const nunjucks = require('nunjucks');
const bodyParser = require('body-parser');

app.use('/', routes);
app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks

nunjucks.configure('views', {noCache: true});
app.listen(3000, () => console.log(`listening 3000`));