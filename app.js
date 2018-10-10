const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const exphbs = require('express-handlebars');

const app = express();

//View engine setup
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Body Parser Middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Static folder
app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.render('contact');
});

app.listen(3000, () => console.log('Server started...'));

