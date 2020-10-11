require('dotenv').config();

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

const db = require('./lib/database');

//SET UP EJS view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/public/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));

app.use('/', require('./routes'));

app.listen(process.env.PORT, ()=>{
    console.log('Server is running...');
    console.log('http://localhost:' + process.env.PORT);
});