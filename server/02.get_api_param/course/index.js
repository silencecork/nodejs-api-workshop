const express = require('express');
const app = express();
const PORT = 3000;

let sampleDataJustin = {
    first_name: "Justin",
    last_name: "Liu"
};

let sampleDataJerry = {
    first_name: "Jerry",
    last_name: "Lin"
};

app.get('/', function (request, response) {
    let ret = {
        message: "呼叫API成功"
    };

    return response.json(ret);
});

app.get('/user', function(request, response) {

    // 使用request.query可以取得參數
    let firstName = request.query["first_name"];

    if (firstName == 'Justin') {
        return response.json(sampleDataJustin);
    } else if (firstName == 'Jerry') {
        return response.json(sampleDataJerry);
    } else {
        let nodata = {
            message: "no data"
        }
        return response.json(nodata);
    }
    
});

app.listen(PORT, function(err) {
    if (err) {
        console.error(err);
    } else {
        console.log('啟動server...');
    }
});