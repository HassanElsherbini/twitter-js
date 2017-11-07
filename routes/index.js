const express = require('express');
const router = express.Router();

router.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    // if (err) throw err;

    console.log('Request URL:', req.originalUrl)
    next()}, 
    function (req, res, next) {
      console.log('Request Type:', req.method)
    next()
})

router.get('/', (req, res) => {
  res.send(`
    <html>
     <head>
       <title>fakeTwitter</title>
     </head>
     <body>
       <h1>Welcome to fakeTwitter!</h1>
     </body>
    </html>
  `)
})

module.exports = router;