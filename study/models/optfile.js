/**
 * Created by jack on 2017/5/31.
 */
var fs = require('fs');
module.exports = {
    readfile: function (path, recall) {          //异步执行
        fs.readFile(path, function (err, data) {
            if (err) {
                console.log(err);
                recall(data);
            } else {
                console.log(data.toString());
            }
            recall(data);
        });
        console.log("异步方法执行完毕");
    },
    readfileSync: function (path, recall) {      //同步读取
        var data = fs.readFileSync(path, 'utf-8');
        console.log("同步方法执行完毕");
        recall(data);
        return data;
    },
    writeFile: function (path, data, recall) {    //异步方式
        fs.writeFile(path, data, function (err) {
            if (err) {
                throw  err;
            }
            console.log('It\'s  saved!');  //文件被保存
            recall("写文件成功！");
        });
    },
    writeFileSync: function (path, data, recall) {  //同步方式
        fs.writeFileSync(path, data);
        console.log("同步写文件完成");
        recall(data);
    },
    readImg: function(path, format, recall){
        fs.readFile(path, format, function(err, file){
            if (err) {
                console.log(err);
                return;
            } else {
                console.log("输出文件");
                recall(file);
            }
        });
    }
};