# 接收GET帶入的參數

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
const PORT = 3000;

let sampleDataJustin = {
    first_name: "Justin",
    last_name: "Liu"
};

let sampleDataJerry = {
    first_name: "Jerry",
    last_name: "Lin"
};

app.get('/user', function(request, response) {
    let firstName = request.query["first_name"];
    if (firstName == 'Justin') {
        return response.json(sampleDataJustin);
    } else if (firstName == 'Jerry') {
        return response.json(sampleDataJerry);
    } else {
        let nodata = {
            message: "no data"
        }
        return response.json(nodata);
    }
});

app.listen(PORT, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('啟動server...');
    }
});
```

### 程式碼解說：

- ```javascript
  app.get('/user', function (request, response) {
     ...
  });
  ```

  - 建立了一個可以接收HTTP GET http://127.0.0.1:3000/user 的API

- app.get()回呼函數內的程式碼如下：

  ```javascript
      let firstName = request.query["first_name"];
  ```

  - request是回呼函數的第一個參數，request.query可以取得HTTP GET的參數
  - 如果用戶使用 http://127.0.0.1:3000/user?first_name=Justin 來呼叫API，本處的request.query["first_name"]就可以得到Justin


## 重啟Server

- 程式碼修改結束，如果Server是啟動的，記得ctrl + c中斷，並重新啟動

- 重新啟動的方法，在指令模式，專案目錄下，使用以下指令

  ```javascript
  node index.js
  ```

## 試用API

- 打開Postman，照以下方式來試看看API
  - request欄位輸入 http://127.0.0.1:3000/user，參數帶入first_name=<任何字串>
  - 方法使用GET

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成