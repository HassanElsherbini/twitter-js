const app = require('express')();
const routes = require('./routes/index.js');

app.use('/', routes);
app.listen(3000, () => console.log(`listening 3000`));