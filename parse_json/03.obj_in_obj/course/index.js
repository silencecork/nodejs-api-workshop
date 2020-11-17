let str_json = `
{
    "first_name": "Justin",
    "last_name": "Liu",
    "info": {
        "id": "F1234567",
        "age": 30
    }
}
`;

let json = JSON.parse(str_json);

let name = json['first_name'];
let id = json['info']['id'];

console.log(`同學${name}的id是${id}`);