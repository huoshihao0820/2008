let mysql=require('mysql');
let connection=mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'root',
	database:'2008'
})

connection.connect();

connection.query('SELECT * FROM p_goods limit 10',function(error,results,fields){

    console.log(results)
})

connection.end();