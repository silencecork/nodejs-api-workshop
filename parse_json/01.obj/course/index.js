let str_json = `
{
    "first_name": "Justin",
    "last_name": "Liu"
}
`;

let json = JSON.parse(str_json);

let firstName = json['first_name'];
console.log(firstName);