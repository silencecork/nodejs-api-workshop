# 剖析JSON

- 程式碼位於course資在夾下

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [剖析JSON](#%E5%89%96%E6%9E%90json)
  - [剖析單一JSON Array](#%E5%89%96%E6%9E%90%E5%96%AE%E4%B8%80json-array)
  - [執行](#%E5%9F%B7%E8%A1%8C)
  - [練習](#%E7%B7%B4%E7%BF%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 剖析單一JSON Array

- 一個JSON的資料格式最基本就是有JSON Object與Array

- 單一JSON Array長相如下

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
            "last_name": "Liu"
        },
        {
            "first_name": "Jerry",
            "last_name": "Lin"
        }
    ]
    `;
    
    let ary = JSON.parse(str);
    ```

- 轉換完後，因為原本的字串資料是JSON Array的格式，所以轉換後，就會對應成Javascript的Array

- 假設目標是要取得第一個Javascript Object的first_name，流程如下：

  - 第一步：取得Javascript Array中的第一個Javascript Object

    ```javascript
    let obj = ary[0];
    ```

  - 第二步：從Javascript Object中，以索引值first_name取得對應的值

    ```javascript
    let firstName = obj['first_name'];
    ```

- 接下來便可以照著Javascript操作Array的方式來取得物件內的數值

  ```javascript
  let str = `
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
  `;
  let ary = JSON.parse(str);
  let obj = ary[0];
  let firstName = obj['first_name'];
  console.log(firstName);
  ```

## 執行

- 在指令模式下，到程式碼所在目錄執行以下指令

  ```bash
  node index.js
  ```

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成