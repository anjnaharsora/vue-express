const express = require('express');
const path = require('path');
const app = express();
const morgan = require('morgan');
const url = require('url');

require('dotenv').load();

app.use(morgan('dev'));
app.use(express.static('./dist'));

let publicUrl = '';
const hostUrl = process.env.HOST;

if (hostUrl) {
  publicUrl = url.parse(hostUrl).pathname.replace(/\/$/, '');
} else {
  console.error('There is no environment variable "HOST" in .env file.');
  return;
}

// Redirect to index.html
app.use(publicUrl + '/', express.static(path.join(__dirname, '/dist')));

// start app
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`The production app is listening on port ${PORT}!`);
});
