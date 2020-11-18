const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

var data = ['Justin', 'Jerry', 'Mary'];

// 如果API Server有建立Post API，請記得要加上使用Body Parser
// 當Server收到Form Post的資料時，就會自動轉成JS的Object
app.use(bodyParser.urlencoded());

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