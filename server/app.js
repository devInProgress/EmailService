const express = require('express');
const app = express();

require('./middlewares')(app);

//View engine setup
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Body Parser Middleware
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// // Static folder
// app.use('/public', express.static(path.join(__dirname, 'public')));

// app.get('/', (req, res) => {
//   res.render('contact');
// });

// app.post('/send', (req, res) => {
//   res.send(req.body);
// })

app.listen(5300, () => console.log('Server started...'));

