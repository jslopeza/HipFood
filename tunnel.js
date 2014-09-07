var ngrok = require('ngrok');

ngrok.connect(8080, function (err, url) {
  process.env.LOCAL_BASE_URL = url;
  require('./web');
});
