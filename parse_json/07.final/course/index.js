var request = require('request');
var options = {
  'method': 'GET',
  'url': 'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-009?Authorization=rdec-key-123-45678-011121314&format=JSON',
};

// 第一步：使用request呼叫API
request(options, function (error, response) {
  if (error) throw new Error(error);

  // 第二步：將回傳的資料由JSON Object轉換為Javascript Object
  let json = JSON.parse(response.body);

  // 第三步：要以索引值cwbopendata取得Javascript Object
  let opendataRoot = json['cwbopendata'];

  // 第四步：由第三步的Javascript Object，以索引值dataset取得Javascript Object
  let dataset = opendataRoot['dataset'];

  // 第五步：由第四步的Javascript Object，以索引值parameterSet取得Javascript Object
  let parameterSet = dataset['parameterSet'];

  // 第六步：由第五步的Javascript Object，以索引值parameter取得Javascript Array
  let parameter = parameterSet['parameter'];
  
  // 第七步：針對第六步的Javascript Array，執行迴圈
  for (let i = 0; i < parameter.length; i++) {
    // 第七步：取出Javascript Array中的每個Javascrip Object
    let data = parameter[i];

    // 第八步：在第七步中的每次回圈迭代時，從Javascript Object中以索引值parameterValue取出對應的說明文字
    let helperSay = data['parameterValue'];
    console.log(helperSay);
  }

  // for回圈也可以用forEach取代
  parameter.forEach(function (data) {
  	let helperSay = data['parameterValue'];
  	console.log(helperSay);
  });

});
