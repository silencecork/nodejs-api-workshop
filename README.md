# Web API的使用與建立

## 什麼是API？

- 全名為Application Programming Interface，可以理解為你到一家餐廳吃飯，你可向服務生訂位、詢問問題、點菜，當你做這些事情時，你並不知道例如餐廳的座位如何配置、餐廳的運作方式、廚房的物料如何準備、怎麼製作食物的細節，你有任何需求，就是向服務生提出，服務生就會幫你跟餐廳可能領班確認有沒有位子，領班會再請服務生回復你、將你的問題詢問餐廳的經理，經理依照他的判斷回答後由服務生再回答你、將你想吃的食物點單送交主廚，主廚完成後由服務生上菜到你桌上，**服務生就像是API的角色**
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
- 使用Postman後，會對什麼是呼叫API與API回傳的資料有所了解
- 接下來需要討論三個問題
  - API的呼叫方式
  - 呼叫API後取得的回傳內容

## API的呼叫方式

- 呼叫方式可以從Postman發送request的選單中可以知道所有的呼叫方式
- 常用的方式包括GET, POST, PUT, PATCH, DELETE，其中最主要的就是GET和POST
- GET大部分狀況，資料是從Query String取得
- POST大部分狀況，資料是從Message Body取得

## 呼叫API後回傳的內容

- 回傳的資料可以是JSON、XML，但主流為JSON

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

