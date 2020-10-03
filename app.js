const express = require('express');
const path = require('path');
const app = express();

//SET UP EJS view
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('ejs', require('ejs').renderFile);

app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/public/bootstrap', express.static(path.join(__dirname, '/node_modules/bootstrap/dist')));

app.use('/', require('./routes'));

app.listen(3000, ()=>{
    console.log('Server is running...');
    console.log('http://localhost:3000');
});