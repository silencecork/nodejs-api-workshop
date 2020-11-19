# 剖析JSON

- 程式碼位於course資在夾下

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [剖析JSON](#%E5%89%96%E6%9E%90json)
  - [剖析巢狀的JSON Object](#%E5%89%96%E6%9E%90%E5%B7%A2%E7%8B%80%E7%9A%84json-object)
  - [執行](#%E5%9F%B7%E8%A1%8C)
  - [練習](#%E7%B7%B4%E7%BF%92)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 剖析巢狀的JSON Object

- 巢狀JSON Object長相如下

  ```json
  {
      "first_name": "Justin",
      "last_name": "Liu",
      "info": {
          "id": "F1234567",
          "age": 30
      }
  }
  ```

- 在呼叫API後得到的JSON資料都還是**字串(string)**的格式，我們必須得將字串轉換為Javascript的Object

- 轉換方式如下：

  ```javascript
  let obj = JSON.parse(要轉換的JSON字串);
  ```

  - 範例：

    ```javascript
    let str = `
    {
        "first_name": "Justin",
        "last_name": "Liu",
        "info": {
            "id": "F1234567",
            "age": 30
        }
    }
    `;
    
    let obj = JSON.parse(str);
    ```

- 上述轉換後，就可以將原本JSON Object的字串轉換為Javascript的Object

- 假設目標是要取得Javascript Object中info Object的id值，流程如下：

  - 第一步：從Javascript Object取得info對應的Javascript Object

    ```javascript
    let info = obj['info'];
    ```

  - 第二步：從info這個Javascript Object中，以索引值id取得數值

    ```javascript
    let id = info['id'];
    ```

- 綜合上述，程式碼總合如下：

  ```javascript
  let str = `
  {
      "first_name": "Justin",
      "last_name": "Liu",
      "info": {
          "id": "F1234567",
          "age": 30
      }
  }
  `;
  let obj = JSON.parse(str);
  let info = obj["info"];
  let id = info["id"];
  console.log(id);
  ```

## 執行

- 在指令模式下，到程式碼所在目錄執行以下指令

  ```bash
  node index.js
  ```

## 練習

- 打開practice資料夾中的index.js，其中有說明，請試著完成

