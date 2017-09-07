/**
 * Created by jack on 2017/5/31.
 */

var optfile = require('./models/optfile');

module.exports = {
    login: function (req, res) {
        function recall(data) {
            res.write(data);
            res.end('');//不写则没有http协议尾
        }
        optfile.readfile("./views/login.html",recall);
    },
    zhuce: function (req, res) {
        function recall(data) {
            res.write(data);
            res.end('');//不写则没有http协议尾
        }
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
    }
}