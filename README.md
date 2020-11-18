# Web API的使用與建立

## 什麼是API？

- 全名為Application Programming Interface
- 以服務生為例子
  - 你到一家餐廳吃飯，你可向服務生點菜，當你做這些事情時，你並不知道廚房的物料如何準備、怎麼製作食物的細節，就是向服務生提出你的需求，服務生就會將你想吃的點單送交主廚，主廚完成後由服務生上菜到你桌上
  - **服務生就像是API的角色**
- 所以API就是將很多系統複雜的問題隱藏起來，供給開發者一個統一的地方，只要呼叫了，接下來系統怎麼運作你不需要知道，你只要接收結果就好
- 各個平台都有API，App的開發、網站的開發、某些第三方套件皆是如此
  - iOS開發的[API文件](https://developer.apple.com/documentation/)
  - Android開發的[API文件](https://developer.android.com/reference)
  - Node.js開發的[API文件](https://nodejs.org/dist/latest-v14.x/docs/api/documentation.html)
  - 政府Open Data的[API文件](https://data.gov.tw/)

## 什麼是Web API？

- Web API多半使用於網站之間交換資料，要求資料的叫做客戶端(Client)，提供資料的叫做伺服端(Server)，Server會提供HTTP網址的方式，提供Client端呼叫

  - 以下是一個Web API範例：

    ```
    https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-009?Authorization=rdec-key-123-45678-011121314&format=JSON
    ```

- Web API通常採取REST的架構風格來製作

  - 什麼是REST (Representational State Transfer) ？
    - [說明](https://blog.toright.com/posts/725/representational-state-transfer-軟體架構風格介紹-part-i-從了解-rest-到設計-restful！.html)

- 現在也非常提倡使用RESTful的架構方式來做

  - 什麼是RESTful？
    - [說明](https://blog.toright.com/posts/1399/淺談-rest-軟體架構風格-part-ii-如何設計-restful-web-service.html)

## 來嘗試使用API

- 下載Postman
  - https://www.postman.com/downloads/
- 如何使用Postman？
  - https://tw.alphacamp.co/blog/postman-api-tutorial-for-beginners
- 測試API使用
  - GET
  ```
  API位置: https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-009
  參數: 
  Authorization=rdec-key-123-45678-011121314
  format=JSON
  ```
  - POST
  ```
  API位置: https://postman-echo.com/post
  Form Data:
  key1: value1
  key2: value2
  ```
- 使用Postman後，會對什麼是呼叫API與API回傳的資料有所了解
- 接下來需要討論兩個問題
  - API的呼叫方式有哪些？
  - 呼叫API後取得的回傳內容是什麼？

## API的呼叫方式

- 呼叫方式可以從Postman發送request的選單中可以知道所有的呼叫方式
- 常用的方式包括GET, POST, PUT, PATCH, DELETE
- **其中最主要的就是GET和POST**
- GET大部分狀況，資料是從Query String傳送到API
- POST大部分狀況，資料是從Form Data傳送到API

## 呼叫API後回傳的內容

- 回傳的資料可以是JSON、XML，**但主流為JSON**

- JSON的[介紹](https://blog.wu-boy.com/2011/04/你不可不知的-json-基本介紹)

- JSON有兩個基本格式

  - JSON Object

    ```json
    {
        "first_name": "Justin",
        "last_name": "Liu"
    }
    ```

  - JSON Array

    ```json
    [
        {
            "first_name": "Justin",
            "last_name": "Liu"
        },
        {
            "first_name": "Jerry",
            "last_name": "Lin"
        }
    ]
    ```

- 不論哪一種格式，最主要的內容都是以**「索引值-內容」(Key-value)**的方式來呈現資料

  ```
  "first_name": "Justin"
  ```

  - first_name: 就是索引值(key)
  - Justin: 就是內容(value)

- 在呼叫API後收到的資料如何剖析，我們後續再做說明

## 如何在Node.js中呼叫API

- 首先先安裝Node.js

  - Windows安裝檔[下載位置](https://nodejs.org/en/#download)

  - 確認是否安裝成功

    - 打開命令提示字元

    - 在命令提示字元視窗下輸入以下指令，確定是否安裝node.js成功

      ```bash
      C:\Users\> node -v
      v14.15.1
      ```

- 在Windows建立一個Node.js專案

  - 打開命令提示字元

  - 建立專案的資料夾並切換到資料夾下

    ```bash
    mkdir api_first_try
    cd api_first_try
    ```

  - 建立專案的指令

    ```bash
    npm init -y
    ```

  - 你會看到以下輸出，就表示建立成功了

    ```bash
    {
      "name": "api_first_try",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [],
      "author": "",
      "license": "ISC"
    }
    ```

  - 打開檔案總管，切換到你建立專案的路徑下，建立主要程式碼檔案index.js

  - 上述步驟結束後，你的資料夾下檔案應該如下

    ```
    /api_first_try
    │   index.js     -> 專案的主要程式碼
    │   package.json -> 專案會使用到的套件    
    ```

- 撰寫Node.js呼叫API的程式碼

  - 打開Postman，點選右方的Code

    ![](https://github.com/silencecork/nodejs-api-workshop/raw/master/images/2020-11-17%2022_19_20-Postman.png)

  - 可以看到各種程式碼產生器，點選Nodejs - Request，就可以看到產生出來的Sample Code

    ![](https://github.com/silencecork/nodejs-api-workshop/raw/master/images/2020-11-17%2022_29_11-Postman.png)

  - 把上述程式碼複製下來，貼到index.js上

    ```javascript
    var request = require('request');
    var options = {
      'method': 'GET',
      'url': 'https://opendata.cwb.gov.tw/fileapi/v1/opendataapi/F-C0032-009?Authorization=rdec-key-123-45678-011121314&format=JSON',
      'headers': {
        'Cookie': 'TS01dbf791=0107dddfeff705c0fde06fa4202acb6b45d060d10fb10c0587f5ae065bfe3e7b1f1b63e01fc2a7affdd04e9bd12d417ad67c39659e'
      }
    };
    request(options, function (error, response) {
      if (error) throw new Error(error);
      console.log(response.body);
    });
    ```

  - 打開命令提示字元，切換到專案api_first_try目錄下，並安裝request套件

    ```bash
    cd api_first_try
    npm install request --save
    ```

  - 安裝完套件後執行程式碼

    ```bash
    node index.js
    ```

  - 就可以在畫面上看到輸出的結果，你可以比對看看與Postman呼叫的結果是否一樣

    ```json
    {
     "cwbopendata": {
      "@xmlns": "urn:cwb:gov:tw:cwbcommon:0.1",
      "identifier": "a28cd970-513b-160d-bcbc-684d0b5fbae8",
      "sender": "weather@cwb.gov.tw",
      "sent": "2020-11-17T17:23:52+08:00",
      "status": "Actual",
      "msgType": "Issue",
      "scope": "Public",
      "dataid": "F-C0032-009",
      "source": "Weather Forecast Center",
      "dataset": {
       "datasetInfo": {
        "datasetDescription": "WeatherAssistant",
        "datasetLanguage": "zh-TW",
        "issueTime": "2020-11-17T17:24:31+08:00"
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
          "parameterValue": "晴到多雲，早晚稍涼，日夜溫差稍大，早出晚歸請適時增減衣物"
         },
         {
          "parameterValue": "今（17）日大多為多雲到晴的天氣，早晚稍涼，近午溫暖；在溫度方面，截至17時為止，臺北站測得的高溫 為29.4度，低溫為24.1度。"
         },
         {
          "parameterValue": "明（18）日為晴到多雲的天氣，預測平地氣溫約22至30度，早晚稍涼，近午溫暖，日夜溫差稍大，早出晚歸 請適時增減衣物。"
         },
         {
          "parameterValue": "東半部（含綠島、蘭嶼）、基隆北海岸、馬祖及恆春半島沿海有長浪發生的機率，請注意。"
         }
        ]
       }
      }
     }
    }
    ```
  - 請試試！在Node.js中使用Post來呼叫API
  ```
  API位置: https://postman-echo.com/post
  Form Data:
  key1: value1
  key2: value2
  ```
  - 補充資料
    - 套件request的[使用教學](https://attacomsian.com/blog/node-http-requests-using-request-module)

## 如何在Node.js剖析回傳的JSON資料

