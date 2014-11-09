var ack = require('ac-koa').require('hipchat');
var pkg = require('./package.json');
var app = ack(pkg);
var ordrin = require('ordrin-api');
//var Notifier = require('ac-koa-hipchat-notifier').Notifier;

var addon = app.addon()
  .hipchat()
  .allowRoom(true)
  .scopes('send_notification');

if (process.env.DEV_KEY) {
  addon.key(process.env.DEV_KEY);
}

var regex = /\/lunch/;

// Order In API

var oapi = new ordrin.APIs('jYUlaNlWpyDZxCeYl7qZ1jFOk7Fig_lZKsF-RPVFMIc', ordrin.TEST);

addon.webhook('room_message', regex, function *() {
  var answer = this.match.input;
  // Split 
  var room = this.roomClient;

  var split1 = answer.split(' in ');
  var split2 = split1[1].split(' at ');
  var split3 = split2[1].split(', ');
  

  var addr = split2[0];
  var city = split3[0];
  var zip = split3[1];

  var args = {
  	datetime : "ASAP",
  	addr : addr,
  	city : city,
  	zip : zip
  };

  oapi.delivery_list(args, function(err, datas){
  	if(err){
  		room.sendNotification('There is in error in your query!');
  	}
  	datas.forEach(function(data){
  		room.sendNotification('<b>' + data.na + ' </b><i>' + data.cs_phone + ' cusines : ' + data.cu[0] + ' ' + data.cu[1] + ' ' + data.cu[2] + '</i>');
  		//console.log(data);
  	});
  });
});
 
app.listen();
