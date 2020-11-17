let str_json = `
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

// 請剖析上述JSON並印出course中的第二堂課的名稱以及第幾節