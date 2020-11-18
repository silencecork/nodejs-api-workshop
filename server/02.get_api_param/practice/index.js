const express = require('express');
const app = express();
const PORT = 3000;

let sampleDataJustin = `
{
    "first_name": "Justin",
    "last_name": "Liu"
}
`;

let sampleDataJerry = `
{
    "first_name": "Jerry",
    "last_name": "Lin"
}
`;

// 練習內容
// 寫一個GET API /user
// 接收兩個參數，first_name, last_name
// 如果first_name是Justin, last_name是Liu(不分大小寫)，就回傳sampleDataJustin
// 如果first_name是Jerry, last_name是Lin(不分大小寫)sampleDataJerry


app.listen(PORT, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('啟動server...');
    }
});