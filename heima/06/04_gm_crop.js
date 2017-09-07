var fs = require('fs');
var gm = require('gm');

gm("./danny.jpg").crop(141,96,152,181)//宽、高、x轴、y轴
    .write("./2.jpg",function(err){
    });