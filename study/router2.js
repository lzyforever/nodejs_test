/**
 * Created by jack on 2017/5/31.
 * 改造router
 */

var optfile = require('./models/optfile');
var url = require('url');
var querystring = require('querystring');

function getRecall(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html;  charset=utf-8'});
    function recall(data) {
        res.write(data);
        res.end('');//不写则没有http协议尾
    }
    return recall;
}

module.exports = {
    login: function (req, res) {
        //以get方式接收参数
        /*var param = url.parse(req.url, true).query;
        console.log(param);
        if (param['email'] != undefined) {
            console.log(param['email'])
        }
        if (param['pwd'] != undefined) {
            console.log(param['pwd'])
        }

        */

        //以post方式接收参数
        var post = ''; //定义了一个post变量，用于暂存请求体的信息

        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中
        req.on('data', function (chunk) {
            post += chunk;
        });

        //-------注意异步-------------
        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。
        req.on('end', function () {
            post = querystring.parse(post);
            /*console.log('email:' + post['email'] + '\n');
            console.log('pwd:' + post['pwd'] + '\n');
            recall = getRecall(req, res);*/

            //替换html里面的值
            arr = ['email', 'pwd'];

            function recall(data) {
                dataStr = data.toString();
                for (var i = 0; i < arr.length; i++) {
                    re = new RegExp('{'+arr[i]+'}', 'g'); // /\{name\}/g
                    dataStr = dataStr.replace(re, post[arr[i]]);
                }
                res.write(dataStr);
                res.end('');//不写则没有http协议尾
            }

            optfile.readfileSync("./views/login.html",recall);
        });
    },
    zhuce: function (req, res) {
        recall = getRecall(req, res);
        optfile.readfileSync("./views/zhuce.html",recall);
    },
    writefile: function(req, res) {
        function recall(data) {
            res.write(data);
            res.end('');
        }
        optfile.writeFile("./views/one.txt","我的写入文件",recall)
    },
    writefileAsync: function(req, res) {
        function recall(data) {
            res.write(data)
            res.end('');
        }
        optfile.writeFileSync("./views/two.txt", "今天天气好晴朗", recall)
    },
    readimg: function(req, res) {
        var format = "binary";
        function recall(data) {
            res.write(data, format);
            res.end();
        }
        optfile.readImg("./imgs/smail.jpg", format,recall)
    },
    showimg : function(req, res) {
        res.writeHead(200, {'Content-Type':'image/jpeg'});
        var format = "binary";
        function recall(data) {
            res.write(data, format);
            res.end();
        }
        optfile.readImg("./imgs/smail.jpg", format,recall)
    }
}