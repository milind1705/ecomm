const express = require('express');
const router = express.Router();
const passport = require('passport');


function isLoggedIn (req, res, next) {
    req.user ? next () : res.sendStatus(401);
}

router.get('/', (req,res) => {
    res.render("home")
})

router.get('/auth/google',
    passport.authenticate('google', {scope: ['email', 'profile']})
)
router.get('/auth/google/callback', 
    passport.authenticate('google',{
        successRedirect: '/dashboard',
        failureRedirect: '/auth/failure'
    })    
);

router.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard')
});
router.get('/auth/failure', (req, res) => {
    res.send('authanication field')
})

module.exports = router;