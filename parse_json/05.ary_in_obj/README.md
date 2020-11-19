# 剖析JSON

## 剖析JSON Object中有JSON Array

- JSON Object中有JSON Array，呈現如下

  ```json
  {
      "first_name": "Justin",
      "last_name": "Liu",
      "info": {
          "id": "F1234567",
          "age": 30
      },
      "course": [
      	{
      		"name": "計算機概論",
      		"day": "星期一",
      		"class": "1,2"
      	},
      	{
      		"name": "網路概論",
      		"day": "星期二",
      		"class": "3,4"
      	}
      ]
  }
  ```

- 在呼叫API後得到的JSON資料都還是**字串(string)**的格式，我們必須得將字串轉換為Javascript的Array

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
        },
        "course": [
        	{
        		"name": "計算機概論",
        		"day": "星期一",
        		"class": "1,2"
        	},
        	{
        		"name": "網路概論",
        		"day": "星期二",
        		"class": "3,4"
        	}
        ]
    }
    `;
    
    let obj = JSON.parse(str);
    ```

- 轉換完後，因為原本的字串資料是JSON Array的格式，所以轉換後，就會對應成Javascript的Array

- 假設目標是要取得Javascript Object中的course陣列內的第一個Javascript Object中的name值，流程如下：

  - 第一步：取得Javascript Object，以course為索引值取得Javascript Array

    ```javascript
    let course = obj["course"];
    ```

  - 第二步：從Javascript Array中取得第一個Javascript Object

    ```javascript
    let courseDetail = course[0];
    ```

  - 第三步：從obj這個Javascript Object中，以索引值name取得數值

    ```javascript
    let name = courseDetail["name"];
    ```

- 所以綜合上述，可以出現下方的程式碼

  ```javascript
  let str = `
  {
      "first_name": "Justin",
      "last_name": "Liu",
      "info": {
          "id": "F1234567",
          "age": 30
      },
      "course": [
      	{
      		"name": "計算機概論",
      		"day": "星期一",
      		"class": "1,2"
      	},
      	{
      		"name": "網路概論",
      		"day": "星期二",
      		"class": "3,4"
      	}
      ]
  }
  `;
  let obj = JSON.parse(str);
  let course = obj["course"];
  let courseDetail = course[0];
  let name = courseDetail["name"];
  console.log(name);
  ```

  