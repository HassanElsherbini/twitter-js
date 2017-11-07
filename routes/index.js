const express = require('express');
const router = express.Router();
// const nunjucks = require('nunjucks');

router.use(function (req, res, next) {
    // do your logging here
    // call `next`, or else your app will be a black hole — receiving requests but never properly responding
    // if (err) throw err;

    console.log(req.method, req.url);
    next()
})

// router.get('/', (req, res) => {
//   res.render('index.html', locals);
// })


module.exports = router;