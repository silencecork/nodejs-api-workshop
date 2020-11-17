let str_json = `
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

let json = JSON.parse(str_json);

let firstName = json[0]['first_name'];
console.log(`第一筆資料的first name是${firstName}`)

json.forEach(function (data) {
	let name = data['first_name'];
	console.log(`以ForEach執行，有同學first_name是${name}`)
})

for (let i = 0; i < json.length; i++) {
	let data = json[i];
	let name = data['first_name'];
	console.log(`以For執行，有同學first_name是${name}`)
}