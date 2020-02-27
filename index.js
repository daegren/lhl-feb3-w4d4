const path = require('path');
const express = require('express');
const sassMiddleware = require('node-sass-middleware');

const data = [
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'},
  {name: 'Bill Murray', url: 'https://www.fillmurray.com/200/200'}
];

const app = express();

app.set('view engine', 'ejs');

app.use(sassMiddleware({
  src: path.join(__dirname, 'styles'),
  dest: path.join(__dirname, 'public', 'css'),
  debug: true,
  outputStyle: 'extended',
  prefix: '/css'
}));

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', {data});
});

app.listen(8080, () => {
  console.log('Application is running on http://localhost:8080');
});
