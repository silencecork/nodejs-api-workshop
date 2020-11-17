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

let json = JSON.parse(str_json);

let firstName = json['first_name'];
let id = json['info']['id'];
let courses = json['course'];

let firstClassName = courses[0]['name'];

console.log(`同學${firstName} id為${id} 第一堂課是${firstClassName}`);

courses.forEach(function (course) {
    let courseName = course['name'];
    let courseDay = course['day'];
    console.log(`有課程${courseName}在${courseDay}`);
});