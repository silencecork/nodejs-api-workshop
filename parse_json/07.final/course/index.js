var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-009?Authorization=rdec-key-123-45678-011121314&format=JSON',
};
request(options, function (error, response) {
  if (error) throw new Error(error);
  //console.log(response.body);

  let json = JSON.parse(response.body);
  let parameterSet = json['cwbopendata']['dataset']['parameterSet'];
  let weatherHelper = parameterSet['parameter'];

  weatherHelper.forEach(function (data) {
  	let helperSay = data['parameterValue'];
  	console.log(helperSay);
  });

});
