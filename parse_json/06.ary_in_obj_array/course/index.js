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

let json = JSON.parse(str_json);

json.forEach(function (person) {
	let name = person['first_name'];
	let id = person['info']['id'];
	console.log(`學生${name}, id ${id}`);
	let courses = person['course'];
	courses.forEach (function (course) {
		let courseName = course['name'];
		let day = course['day'];
		let classes = course['class'];
		console.log(`  課程${courseName}, 星期${day}, 堂數${classes}`)
	});
});
