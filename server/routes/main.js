const express = require('express');
const router = express.Router();


//Routes
router.get ('', (req,res) => {
    const locals ={
        title: "Blog-Website-1.0",
        description: "Simple Blog created with NodeJs, ExpressJs & MongoDB."
    }
    res.render('index', {locals});
})


router.get ('/about', (req,res) => {
    res.render('about');
})

module.exports = router;