/**
 * Created by jack on 2017/6/5.
 */

var mysql = require('mysql');//调用mysql模块

//创建一个connection对象
var connection = mysql.createConnection({
    host: 'localhost',          //主机
    user: 'root',               //MySQL认证用户名
    password: 'luozhiyu',       //MySQL认证用户密码
    database: 'test',           //使用数据库
    port: '3306'                //端口号
});

//创建一个connection连接
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});

//----插入
var userAddSql = 'insert into user (uname,pwd) values(?,?)';
var param = ['aaa','bbb'];
connection.query(userAddSql,param,function(err,rs){
    if(err){
        console.log('insert err:',err.message);
        return;
    }
    console.log('insert success');
});

//执行查询
//其他的语句和查询一样
connection.query('SELECT * from user where uid=?',[2], function(err, rs) {//第三个参数为fields,为字段信息
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    for(var i=0;i<rs.length;i++){
        console.log('The solution is: ', rs[i].uname);
    }
});


//关闭connection
connection.end(function(err){
    if(err){
        console.log(err.toString());
        return;
    }
    console.log('[connection end] succeed!');
});

