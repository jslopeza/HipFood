var ngrok = require('ngrok');

ngrok.connect(3000, function (err, url) {
  process.env.LOCAL_BASE_URL = url;
  require('./web');
});
