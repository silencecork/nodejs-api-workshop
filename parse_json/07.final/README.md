# 剖析真實API Response

- 程式碼位於course資在夾下

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [剖析真實API Response](#%E5%89%96%E6%9E%90%E7%9C%9F%E5%AF%A6api-response)
  - [以政府OpenData為例子](#%E4%BB%A5%E6%94%BF%E5%BA%9Copendata%E7%82%BA%E4%BE%8B%E5%AD%90)
  - [執行](#%E5%9F%B7%E8%A1%8C)
  - [練習](#%E7%B7%B4%E7%BF%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 以政府OpenData為例子

- 台北市天氣小幫手
  - https://data.gov.tw/dataset/9221
- API位置
  - https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-009?Authorization=rdec-key-123-45678-011121314&format=JSON
- 回傳資料

```json
{
    "cwbopendata": {
        "@xmlns": "urn:cwb:gov:tw:cwbcommon:0.1",
        "identifier": "74e92fcf-5ca4-0f40-52f5-391abcbd840b",
        "sender": "weather@cwb.gov.tw",
        "sent": "2020-11-19T17:23:52+08:00",
        "status": "Actual",
        "msgType": "Issue",
        "scope": "Public",
        "dataid": "F-C0032-009",
        "source": "Weather Forecast Center",
        "dataset": {
            "datasetInfo": {
                "datasetDescription": "WeatherAssistant",
                "datasetLanguage": "zh-TW",
                "issueTime": "2020-11-19T17:24:41+08:00"
            },
            "location": {
                "locationName": "台北市",
                "stationId": "46692",
                "geocode": "63"
            },
            "parameterSet": {
                "parameterSetName": "天氣小幫手描述",
                "parameter": [
                    {
                        "parameterValue": "天氣稍轉涼，雲量偏多有局部短暫雨，外出請攜帶雨具備用"
                    },
                    {
                        "parameterValue": "今（19）日天氣晴朗穩定，大多為晴到多雲的天氣，早晚稍涼，日夜溫差大；在溫度方面，臺北站測得的高溫為32.7度，低溫為22.9度。"
                    },
                    {
                        "parameterValue": "明（20）日鋒面通過北部海面及東北風稍增強，天氣稍轉涼，雲量偏多有局部短暫雨；預測平地氣溫約22至27度，外出請攜帶雨具備用。"
                    },
                    {
                        "parameterValue": "今晚至明日東半部（含綠島、蘭嶼）、基隆北海岸及恆春半島沿海有長浪發生的機率，請注意。"
                    }
                ]
            }
        }
    }
}
```



- 如果目標是要取得天氣小幫手描述，該如何做？

  - 第一步：使用request呼叫API
  - 第二步：將回傳的資料由JSON Object轉換為Javascript Object
  - 第三步：要以索引值**cwbopendata**取得Javascript Object
  - 第四步：由第三步的Javascript Object，以索引值**dataset**取得Javascript Object
  - 第五步：由第四步的Javascript Object，以索引值**parameterSet**取得Javascript Object
  - 第六步：由第五步的Javascript Object，以索引值**parameter**取得Javascript Array
  - 第七步：針對第六步的Javascript Array，執行迴圈，取出Javascript Array中的每個Javascrip Object
  - 第八步：在第七步中的每次回圈迭代時，從Javascript Object中以索引值**parameterValue**取出對應的說明文字

  ```javascript
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
  
  });
  ```

## 執行

- 在指令模式下，到程式碼所在目錄執行以下指令

  ```bash
  node index.js
  ```

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成



