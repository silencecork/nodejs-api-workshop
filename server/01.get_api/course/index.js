const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', function (request, response) {
    let data = {
        message: "呼叫API成功"
    };

    return response.json(data);
});

app.get('/user', function(request, response) {
    let sample = {
        first_name: "Justin",
        last_name: "Liu"
    };
    return response.json(data);
});

app.get('/web', function(request, response) {
    let html = `
    <html>
        <head>
            <title>測試網頁</title>
        </head>
        <body>
           <h1>Hello World</h1>
        </body>
    </html>
    `
    return response.send(html);
});

app.listen(PORT, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('啟動server...');
    }
});