# 如何在Node.js中剖析JSON

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [如何在Node.js中剖析JSON](#%E5%A6%82%E4%BD%95%E5%9C%A8nodejs%E4%B8%AD%E5%89%96%E6%9E%90json)
  - [在Javascript中的Object與陣列](#%E5%9C%A8javascript%E4%B8%AD%E7%9A%84object%E8%88%87%E9%99%A3%E5%88%97)
  - [在Node.js中剖析JSON的範例說明](#%E5%9C%A8nodejs%E4%B8%AD%E5%89%96%E6%9E%90json%E7%9A%84%E7%AF%84%E4%BE%8B%E8%AA%AA%E6%98%8E)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## 在Javascript中的Object與陣列

- 了解Javascript中的Object物件可以幫助我們快速上手後續剖析JSON

- 在Javascript的資料型態有原始型態(primitive type)與物件型態(object type)

  - 原始型態：Boolean, Number, String, Null, Undefined
  - 物件型態：Object

- 物件型態的呈現方式如下

  ```javascript
  let obj = {
      key1: "abc",
      key2: 123,
      key3: true
  };
  ```

  

- 資料在Object中都是以**索引值-數值 (key-value)**的方式儲存

- 使用以下兩種方式取用物件型態內的資料：

  ```javascript
  let obj = {
      key1: "abc",
      key2: 123,
      key3: true
  };
  let value1 = obj["key1"];
  let value2 = obj["key2"];
  let value3 = obj["key3"];
  console.log(value1);
  console.log(value2);
  console.log(value3);
  ```

  ```javascript
  let obj = {
      key1: "abc",
      key2: 123,
      key3: true
  };
  let value1 = obj.key1;
  let value2 = obj.key2;
  let value3 = obj.key3;
  console.log(value1);
  console.log(value2);
  console.log(value3);
  ```

  

- 另外Object也可以用Array來呈現，呈現方式如下：

  ```javascript
  let ary = [
      {
          key1: "value1"
      },
      {
          key1: "value2"
      }
  ];
  ```

  

- 使用以下兩種方式取用物件型態內的資料：

  ```javascript
  let ary = [
      {
          key1: "value1"
      },
      {
          key1: "value2"
      }
  ];
  let value1 = ary[0]['key1'];
  console.log('陣列第一個物件的key1是' + value1)
  let value2 = ary[1]['key1'];
  console.log('陣列第二個物件的key1是' + value2)
  ```

  ```javascript
  let ary = [
      {
          key1: "value1"
      },
      {
          key1: "value2"
      }
  ];
  let value1 = ary[0].key1;
  console.log('陣列第一個物件的key1是' + value1)
  let value2 = ary[1].key1;
  console.log('陣列第二個物件的key1是' + value2)
  ```

  

## 在Node.js中剖析JSON的範例說明

- 以下針對常出現的JSON格式進行剖析練習
- 練習項目依照資料夾分類
  - [01.obj](https://github.com/silencecork/nodejs-api-workshop/tree/master/parse_json/01.obj)
    - 單一JSON Object
  - [02.array](https://github.com/silencecork/nodejs-api-workshop/tree/master/parse_json/02.array)
    - 單一JSON Array
  - [03.obj_in_obj](https://github.com/silencecork/nodejs-api-workshop/tree/master/parse_json/03.obj_in_obj)
    - 巢狀的JSON Object
  - [04.obj_in_obj_array](https://github.com/silencecork/nodejs-api-workshop/tree/master/parse_json/04.obj_in_obj_array)
    - 巢狀JSON Object的陣列
  - [05.ary_in_obj](https://github.com/silencecork/nodejs-api-workshop/tree/master/parse_json/05.ary_in_obj)
    - JSON Object中有JSON Array
  - [06.ary_in_obj_array](https://github.com/silencecork/nodejs-api-workshop/tree/master/parse_json/06.ary_in_obj_array)
    - JSON Array中的JSON Object中有JSON Array
  - [07.final](https://github.com/silencecork/nodejs-api-workshop/tree/master/parse_json/07.final)
    - 實際呼叫API後剖析的例子
    - 此專案執行前，記得要切換到專案下，使用**npm install**進行套件安裝
- 每個資料夾下都包含兩個資料夾
  - course 課程說明用
  - practice 練習用