# 建立Web API Server

- 建立Web API Server，我們使用express套件

## 建立一個新專案

- 初始化專案

  ```bash
  mkdir my_web_server
  cd my_web_server
  npm init -y
  ```

- 在專案資料夾下，建立index.js檔，為建立主要程式碼

  

## 安裝Express

- 在專案資料夾下，輸入以下指令

  ```bash
  npm install express --save
  ```

  

## 啟動API Server

- 程式碼

  - 打開index.js，輸入以下程式碼

    ```javascript
    const express = require('express');
    const app = express();
    
    app.listen(3000, function () {
      console.log('server start...');
    });
    ```

- 程式碼說明

  - ```javascript
    const express = require('express');
    ```

    - 這表示要使用**express**這個套件，這必須得有賴於照著前述步驟正確安裝套件 (使用npm install express --save)

  - ```javascript
    const app = express();
    ```

    - 這裡表示使用express來建立一個名為app的物件

  - ```javascript
    app.listen(3000, function () {
      console.log('server start...');
    });
    ```

    - 使用app.listene表示要啟動可以接收API request的server，包含兩個參數
      - 參數1：server啟動時要聆聽的port，這裡的範例為3000
      - 參數2：回呼(callback)函數，當呼叫app.listen後，**等待server建立起來，就會從這個callback函數呼叫回來**。所以當你看到畫面上印出「server start...」，就表示server啟動成功了

- 啟動/停止server

  - 在指令模式下，專案資料夾下，輸入以下指令來啟動server

    ```bash
    node index.js
    ```

  - 接下來應該會在畫面上看到，就表示server啟動成功

    ```bash
    server start...
    ```

  - 停止server的方式，在指令模式下按下**ctrl + c**進行中斷

- 使用server

  - server確定啟動的狀態下

  - 打開Postman，在request處輸入以下網址後，按下Send

    ```bash
    http://127.0.0.1:3000
    ```

  - 你應該會看到回傳的內容如下，這就表示server啟動成功，只是還沒有辦法處理來自網路的request

    ```html
    <!DOCTYPE html>
    <html lang="en">
    
    <head>
    	<meta charset="utf-8">
    	<title>Error</title>
    </head>
    
    <body>
    	<pre>Cannot GET /</pre>
    </body>
    
    </html>
    ```

    