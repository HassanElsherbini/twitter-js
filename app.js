const app = require('express')();
const routes = require('./routes/index.js');
const nunjucks = require('nunjucks');

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views'); // point nunjucks to the proper directory for templates

var locals = {
    title: 'An Example',
    people: [
        { name: 'Gandalf'},
        { name: 'Frodo' },
        { name: 'Hermione'}
    ]
};
nunjucks.configure('views', {noCache: true});
app.get('/', function(req, res) {
	res.render('index.html',locals);
})
app.use('/', routes);
app.listen(3000, () => console.log(`listening 3000`));