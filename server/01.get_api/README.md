# 建立接收GET的API

- 程式碼位於course資在夾下

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [建立接收GET的API](#%E5%BB%BA%E7%AB%8B%E6%8E%A5%E6%94%B6get%E7%9A%84api)
  - [專案操作說明](#%E5%B0%88%E6%A1%88%E6%93%8D%E4%BD%9C%E8%AA%AA%E6%98%8E)
  - [程式碼](#%E7%A8%8B%E5%BC%8F%E7%A2%BC)
    - [程式碼解說：](#%E7%A8%8B%E5%BC%8F%E7%A2%BC%E8%A7%A3%E8%AA%AA)
  - [定義其他API路徑](#%E5%AE%9A%E7%BE%A9%E5%85%B6%E4%BB%96api%E8%B7%AF%E5%BE%91)
  - [回傳HTML網頁](#%E5%9B%9E%E5%82%B3html%E7%B6%B2%E9%A0%81)
  - [重啟Server](#%E9%87%8D%E5%95%9Fserver)
  - [試用API](#%E8%A9%A6%E7%94%A8api)
  - [練習](#%E7%B7%B4%E7%BF%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 專案操作說明

- 本專案初始化好，記得在指令模式，本專案目錄下，執行下面指令以安裝express套件

  ```bash
  cd course
  npm install
  ```

## 程式碼

```javascript
const express = require('express');
const app = express();

app.get('/', function (request, response) {
    let data = {
        message: "呼叫API成功"
    };
    return response.json(data);
});

app.listen(3000, function () {
  console.log('server start...');
});
```

### 程式碼解說：

- ```javascript
  app.get('/', function (request, response) {
     ...
  });
  ```

  - app.get()
    - 表示建立一個可以接受HTTP GET方法的API入口
  - app.get()包含兩個參數
    - 參數1：接收HTTP GET連線的路徑，在本例子中是/，所以當使用GET呼叫 http://127.0.0.1:3000/ 時，就會進入到這個app.get()中
    - 參數2：當接收來自HTTP GET的API呼叫時，就會到這個回呼(callback)函數，函數包含兩個參數
      - 回呼函數的參數1 request：
        - 從這個參數中可以得到HTTP GET的資訊，後續課程我們回看到可以從這個參數可以得到傳入的參數
      - 回呼函數的參數2 response：
        - 從這個API要回給用戶的資訊，可以藉由response回傳

- app.get()回呼函數內的程式碼如下：

  ```javascript
      let data = {
          message: "呼叫API成功"
      };
  ```

  - 這是在準備要回傳給用戶的資料，此處定義了一個javascript object

- ```javascript
      return response.json(data);
  ```

  - 這裡使用回呼函數的第二個參數response.json()回傳javascript object給用戶
  - response.json()會自動將javascript object轉成字串回傳給呼叫API的用戶

## 定義其他API路徑

- 可以自行定義API的路徑，程式碼如下

```javascript
app.get('/user', function(request, response) {
    let sample = {
        first_name: "Justin",
        last_name: "Liu"
    };
    return response.json(data);
});
```

- 上述程式碼就會接收HTTP GET傳送至API http://127.0.0.1:3000/user 的request

## 回傳HTML網頁

- API也可以回傳HTML網頁

  ```javascript
  app.get('/web', function(request, response) {
      let html = `
      <html>
          <head>
              <title>測試網頁</title>
          </head>
          <body>
             <h1>Hello World</h1>
          </body>
      </html>
      `
      return response.send(html);
  });
  ```

  - 呼叫 http://127.0.0.1:3000/web 的request都會導入此處
  - 最後的response.send(html)，可以回傳任何字串給呼叫API的人，所以本例子回傳了html資料

## 重啟Server

- 程式碼修改結束，如果Server是啟動的，記得ctrl + c中斷，並重新啟動

- 重新啟動的方法，在指令模式，專案目錄下，使用以下指令

  ```javascript
  node index.js
  ```

## 試用API

- 打開Postman，照以下方式來試看看API
  - request欄位輸入
    - http://127.0.0.1:3000/
    - http://127.0.0.1:3000/user
    - http://127.0.0.1:3000/web
  - 方法使用GET

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成