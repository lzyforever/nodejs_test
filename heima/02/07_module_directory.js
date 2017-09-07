/**
 * 在引用一个文件夹,引用一个文件夹，那么该文件夹就需要在node_modules当中定义，如果该文件夹下
 * 没有index.js那么就需要有package.json配置文件进行定义
 */


var bar = require("bar");

console.log(bar.msg);
