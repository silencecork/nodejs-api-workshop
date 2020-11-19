# 剖析JSON

- 程式碼位於course資在夾下

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [剖析JSON](#%E5%89%96%E6%9E%90json)
  - [剖析巢狀JSON Object的陣列](#%E5%89%96%E6%9E%90%E5%B7%A2%E7%8B%80json-object%E7%9A%84%E9%99%A3%E5%88%97)
  - [執行](#%E5%9F%B7%E8%A1%8C)
  - [練習](#%E7%B7%B4%E7%BF%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 剖析巢狀JSON Object的陣列

- 巢狀JSON Object的陣列呈現如下

  ```json
  [
      {
          "first_name": "Justin",
          "last_name": "Liu",
          "info": {
  	        "id": "F1234567",
  	        "age": 30
  	    }
      },
      {
          "first_name": "Jerry",
          "last_name": "Lin",
          "info": {
  	        "id": "A1234567",
  	        "age": 20
  	    }
      }
  ]
  ```

- 在呼叫API後得到的JSON資料都還是**字串(string)**的格式，我們必須得將字串轉換為Javascript的Array

- 轉換方式如下：

  ```javascript
  let obj = JSON.parse(要轉換的JSON字串);
  ```

  - 範例：

    ```javascript
    let str = `
    [
        {
            "first_name": "Justin",
            "last_name": "Liu",
            "info": {
    	        "id": "F1234567",
    	        "age": 30
    	    }
        },
        {
            "first_name": "Jerry",
            "last_name": "Lin",
            "info": {
    	        "id": "A1234567",
    	        "age": 20
    	    }
        }
    ]
    `;
    
    let ary = JSON.parse(str);
    ```

- 轉換完後，因為原本的字串資料是JSON Array的格式，所以轉換後，就會對應成Javascript的Array

- 假設目標是要取得Javascript Array中第一個物件中的info物件內的age值，流程如下：

  - 第一步：取得陣列中的第一個Javascript Object

    ```javascript
    let obj1 = ary[0];
    ```

  - 第二步：從第一個Javascript Object，取得info對應的Javascript Object

    ```javascript
    let info = obj1["info"];
    ```

  - 第三步：從info這個Javascript Object中，以索引值age取得數值

    ```javascript
    let age = info["age"];
    ```

- 所以綜合上述，可以出現下方的程式碼

  ```javascript
  let str = `
  [
      {
          "first_name": "Justin",
          "last_name": "Liu",
          "info": {
  	        "id": "F1234567",
  	        "age": 30
  	    }
      },
      {
          "first_name": "Jerry",
          "last_name": "Lin",
          "info": {
  	        "id": "A1234567",
  	        "age": 20
  	    }
      }
  ]
  `;
  // 剖析字串成為Javascript Object
  let ary = JSON.parse(str);
  let obj1 = ary[0];
  let info = obj1["info"];
  let age = info["age"];
  console.log(age);
  ```

## 執行

- 在指令模式下，到程式碼所在目錄執行以下指令

  ```bash
  node index.js
  ```

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成