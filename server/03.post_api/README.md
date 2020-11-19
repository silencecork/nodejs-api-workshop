# 建立接收POST的API

- 程式碼位於course資在夾下

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [建立接收POST的API](#%E5%BB%BA%E7%AB%8B%E6%8E%A5%E6%94%B6post%E7%9A%84api)
  - [專案操作說明](#%E5%B0%88%E6%A1%88%E6%93%8D%E4%BD%9C%E8%AA%AA%E6%98%8E)
  - [程式碼](#%E7%A8%8B%E5%BC%8F%E7%A2%BC)
    - [程式碼解說：](#%E7%A8%8B%E5%BC%8F%E7%A2%BC%E8%A7%A3%E8%AA%AA)
  - [重啟Server](#%E9%87%8D%E5%95%9Fserver)
  - [試用API](#%E8%A9%A6%E7%94%A8api)
  - [練習](#%E7%B7%B4%E7%BF%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 專案操作說明

- 本專案初始化好，記得在指令模式，本專案目錄下，執行下面指令以安裝express及body-parser套件

  ```bash
  cd course
  npm install
  ```

## 程式碼

```javascript
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

var data = ['Justin', 'Jerry', 'Mary'];

app.use(bodyParser.urlencoded());

app.post('/add_user', function (request, response) {
    let name = request.body["name"];
    data.push(name);

    let msg = {
        message: "新增成功"
    }

    return response.json(msg);
});

app.listen(PORT, function() {
    console.log('server start...')
});
```

### 程式碼解說：

- ```javascript
  const bodyParser = require('body-parser');
  ```

  - 這是給要接收POST API專用的套件
  - **此套件可以將POST傳送到API的資料自動轉換為Javascript Object**

- ```javascript
  app.use(bodyParser.urlencoded());
  ```

  - app.use()可以使用其他套件，讓自行寫的API收到Request前可以做一些前置處理
  - 以本例子就是使用bodyParser來將POST的資料轉換為Javascript Object

- ```javascript
  app.post('/add_user', function (request, response) {
     ...
  });
  ```

  - app.post()
    - 表示建立一個可以接受HTTP POST方法的API入口
    - 所以本例子建立一個可以接收HTTP POST的API http://127.0.0.1:3000/add_user 

- app.post()回呼函數內的程式碼如下：

  ```javascript
      let name = request.body["name"];
  ```

  - 因為有使用body-parser，所以request.body可以得到POST到API得資料，且格式為Javascript object
  - 此處表示從POST傳到API的資料取得索引值為name的資料

## 重啟Server

- 程式碼修改結束，如果Server是啟動的，記得ctrl + c中斷，並重新啟動

- 重新啟動的方法，在指令模式，專案目錄下，使用以下指令

  ```javascript
  node index.js
  ```

## 試用API

- 打開Postman，照以下方式來試看看API
  - request欄位輸入
    - http://127.0.0.1:3000/add_user
  - Body項目選擇form-data，其中填入的資料如下
    - KEY: name
    - VALUE: Test
  - 方法使用POST

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成