const express = require ('express');
const passport = require('passport');
const session = require('express-session');
const app  = express();
app.use(session({ secret: 'cast'}));
app.use(passport.initialize());
app.use(passport.session());
require('dotenv').config();
require('./db/connection');
require('./authntication/googleauth')
 const port = 7000;

function isLoggedIn (req, res, next) {
    req.user ? next () : res.sendStatus(401);
}


 app.set("view engine", "ejs")
app.get('/', (req,res) => {
    res.render("home")
})

app.get('/auth/google',
    passport.authenticate('google', {scope: ['email', 'profile']})
)
app.get('/auth/google/callback', 
    passport.authenticate('google',{
        successRedirect: '/dashboard',
        failureRedirect: '/auth/failure'
    })    
);

app.get('/dashboard', isLoggedIn, (req, res) => {
    res.render('dashboard')
});
app.get('/auth/failure', (req, res) => {
    res.send('authanication field')
})

app.listen(port, () => {
    console.log('server is running on port @ 7000')
})