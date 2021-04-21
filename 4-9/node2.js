let mysql = require('mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: '2008'
});

connection.connect((err, result) => {
    if (err) {
        console.log(err);
        console.log("连接失败");
        return;
    }
    console.log(result);
    console.log("连接成功");
});

/**
 * -------------------
 * 查询数据
 * -------------------
 */

let selectSql = 'SELECT * FROM p_goods limit 10';

connection.query(selectSql, (err, result) => {
    if (err) {
        console.log('[SELECT 失败] - ', err.message);
        return;
    }

    console.log('--------------SELECT------------');
    console.log('查询成功:',result);
    console.log('--------------------------\n\n');
});


connection.end();
