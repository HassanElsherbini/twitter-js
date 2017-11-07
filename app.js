const app = require('express')();
const routes = require('./routes/index.js');
const nunjucks = require('nunjucks');

app.use('/', routes);
app.listen(3000, () => console.log(`listening 3000`));