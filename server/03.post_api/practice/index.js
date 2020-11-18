const express = require('express');
const app = express();
const PORT = 3000;

var data = ['Justin', 'Jerry', 'Mary'];

// 練習內容
// 1. 為API Server加上Body Parser
// 2. 新增一個POST API /remove_user
// 3. 從Post Form Data接收name
// 4. 到data變數中移除第3步中取得的name

app.post('/add_user', function (request, response) {
    let name = request.body.name;
    data.push(name);

    let msg = {
        message: "新增成功"
    }

    return response.json(msg);
});

app.get('/users', function (request, response) {
    return response.json(data)
});

app.listen(PORT, function() {
    console.log('server start...')
});