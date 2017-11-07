const express = require('express');
const router = express.Router();
const tweetBank = require('../tweetBank');

router.get('/', function (req, res) {
  let tweets = tweetBank.list();
  res.render( 'index', { tweets: tweets } );
});

router.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    // if (err) throw err;

    console.log(req.method, req.url);
    next()
})
router.use(express.static('public'));
// router.get('/stylesheets/style.css', function(req, res) {
//   res.sendFile('style.css');
// })


module.exports = router;