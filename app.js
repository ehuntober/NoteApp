require('dotenv').config();

const express = require('express')
const expressLayouts = require('express-ejs-layouts')

const app = express();
const port = 5000 || process.env.PORT;

app.use(express.urlencoded({extended:true}));
app.use(express.json())

//static Files
app.use(express.static('public'));

//Templating Engine
app.use(expressLayouts);
app.set('layout', './layouts/main')
app.set('view engine','ejs');

// Routes
app.use('/', require('./server/routes/index'))


// Handle 404
app.listen(port,() =>{
    console.log('Express server listening on port ${port}');
})