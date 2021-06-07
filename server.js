const express = require ('express');
const passport = require('passport');
const session = require('express-session');
const app  = express();
app.use(session({ secret: 'cast',
    resave: true,
    saveUninitialized:true
}));
app.use(passport.initialize());
app.use(passport.session());
require('dotenv').config();
require('./db/connection');
require('./authntication/googleauth')
const googleRoutes = require('./Routes/google')
 const port = 7000;

 app.set("view engine", "ejs")
app.use('/', googleRoutes)

app.listen(port, () => {
    console.log('server is running on port @ 7000')
})