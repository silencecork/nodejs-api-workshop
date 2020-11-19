# 建立接收GET的API

- 程式碼位於course資在夾下

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
    - 參數1：接收HTTP GET連線的路徑，在本例子中是/，所以當使用GET呼叫http://127.0.0.1:3000/時，就會進入到這個app.get()中
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

- 上述程式碼就會接收HTTP GET傳送至API http://127.0.0.1:3000/user的request

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

  - 呼叫http://127.0.0.1:3000/web的request都會導入此處
  - 最後的response.send(html)，可以回傳任何字串給呼叫API的人，所以本例子回傳了html資料

## 重啟Server

- 程式碼修改結束，如果Server是啟動的，記得ctrl + c中斷，並重新啟動

- 重新啟動的方法，在指令模式，專案目錄下，使用以下指令

  ```javascript
  node index.js
  ```

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成