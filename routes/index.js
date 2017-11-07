const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');
const bodyParser = require('body-parser');

const urlencoderParser = bodyParser.urlencoded({extended: false});


router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets, showForm: true } );
});

router.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    // if (err) throw err;

    console.log(req.method, req.url);
    next();
});

router.get( '/users/:name', function (req, res) {
  let userTweet = tweetBank.find(function(tweet){
    return tweet.name === req.params.name;
  });

  let nameValue = userTweet[0].name;
  res.render('index', {tweets: userTweet, showForm: true, nameValue: nameValue});
});

router.use(express.static('public'));

router.post('/tweets', urlencoderParser, function(req, res) {
  var name = req.body.name;
  var text = req.body.text;
  tweetBank.add(name, text);
  res.redirect('/');
});

module.exports = router;