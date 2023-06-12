require('dotenv').config();

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const connectDB = require('./server/config/db')
// const session = require('express-session')
const passport = require('passport')
const MongoStore =require('connect-mongo')

const session = require('express-session');




const app = express();
const port = 5000 || process.env.PORT;

// app.use(session({
//     secret: 'your_secret_key',
//     resave: false,
//     saveUninitialized: false
//   }));

app.use(passport.initialize())
// app.use(passport.session())






app.use(express.urlencoded({extended:true}));
app.use(express.json())

//static Files
app.use(express.static('public'));

//connect to Database
connectDB()

//Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main')
app.set('view engine','ejs');

// Routes
app.use('/', require('./server/routes/index'));
app.use('/', require('./server/routes/dashboard'));

// Handle 404
app.get('*', function(req,res){
    res.status(404).render('404')
})


app.listen(port,() =>{
    console.log('Express server listening on port ${port}');
})