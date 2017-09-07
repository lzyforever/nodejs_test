var fs = require("fs");

exports.getAllAlbums = function(callback){
    fs.readdir("./uploads", function(err, files){
        if (err) {
            callback("没有找到uploads文件夹", null);
            return;
        }
        var allAlbums = [];
        (function iterator(i){
            if (i == files.length){
                //遍历结束
                //return allAlbums;
                callback(null, allAlbums);
                return;
            }
            fs.stat("./uploads/" + files[i], function(err, status){
                if (err){
                    callback("找不到文件" + files[i], null);
                    return;
                }

                if (status.isDirectory()) {
                    allAlbums.push(files[i])
                }
                iterator(i+1);
            });
        })(0);
    });
};

//通过文件名获得所有图片
exports.getImagesByAlbumName = function(albumName, callback){
    fs.readdir("./uploads/" + albumName, function(err, files){
        if (err) {
            callback("没有找到"+albumName+"文件夹", null);
            return;
        }
        var images = [];
        (function iterator(i){
            if (i == files.length){
                callback(null, images);
                return;
            }
            fs.stat("./uploads/" + albumName+ "/" + files[i], function(err, status){
                if(err){
                    callback("找不到文件" + files[i] , null);
                    return;
                }
                if (status.isFile()) {
                    images.push(files[i])
                }
                iterator(i+1);
            });
        })(0);
    });
};