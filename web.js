var ack = require('ac-koa').require('hipchat');
var pkg = require('./package.json');
var app = ack(pkg);
 
var addon = app.addon()
  .hipchat()
  .allowRoom(true)
  .scopes('send_notification');
 
addon.webhook('room_message', /^\/hello$/, function *() {
  yield this.roomClient.sendNotification('Hi, ' + this.sender.name + '!');
});
 
app.listen();
