# 剖析JSON

## 剖析單一JSON Object

- 一個JSON的資料格式最基本就是有JSON Object與Array

- JSON Object長相如下

  ```json
  {
      "first_name": "Justin",
      "last_name": "Liu"
  }
  ```

  

- 在呼叫API後得到的JSON資料都還是**字串(string)**的格式，我們必須得將字串轉換為Javascript的Object

- 轉換方式如下

  ```javascript
  let obj = JSON.parse(要轉換的JSON字串);
  ```

  - 範例：

    ```javascript
    let str = `
    {
        "first_name": "Justin",
        "last_name": "Liu"
    }
    `;
    
    let obj = JSON.parse(str);
    ```

- 上述轉換後，就可以將原本JSON Object的字串轉換為Javascript的Object

- 接下來便可以照著Javascript操作Object的方式來取得物件內的數值

  ```javascript
  let str = `
  {
      "first_name": "Justin",
      "last_name": "Liu"
  }
  `;
  
  let obj = JSON.parse(str);
  let name = obj["first_name"];
  console.log(name);
  ```

  