var request = require('request')

var propertiesObject = { q:'Merhaba', domain:'youchat' };

request({url:"https://you.com/api/streamingSearch", qs:propertiesObject}, function(err, response, body) {
  if(err) { console.log(err); return; }
  console.log("Get response: " + response.statusCode);
  console.log(response)
});