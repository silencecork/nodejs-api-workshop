let str_json = `
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

let json = JSON.parse(str_json);

let first_name = json[0]['first_name'];
let id = json[0]['info']['id'];
console.log(`第一個同學${first_name}的id為${id}`);


json.forEach(function(data) {
    let first_name = data['first_name'];
    let age = data['info']['id'];
    console.log(`同學${first_name}的id為${id}`);
});