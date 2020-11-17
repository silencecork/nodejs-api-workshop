let str_json = `
[
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
    },
    {
        "first_name": "Jerry",
        "last_name": "Lin",
        "info": {
	        "id": "A1234567",
	        "age": 20
	    },
	    "course": [
	    	{
	    		"name": "作業系統",
	    		"day": "星期二",
	    		"class": "1,2"
	    	},
	    	{
	    		"name": "演算法",
	    		"day": "星期三",
	    		"class": "11,12"
	    	}
	    ]
    }
]
`;


// 請剖析上述JSON並使用forEach印出陣列中的兩人名字以及在星期二有什麼課程