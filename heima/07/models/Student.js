var db = require("./db");
var mongoose = require('mongoose');

// Schema 结构
var studentSchema = new mongoose.Schema({
	name : {type : String},
	age  : {type : Number},
	sex  : {type : String}
	//time     : {type : Date, default: Date.now}
});

//创建静态方法
studentSchema.statics.zhaoren = function(name, callback){
	this.model("Student").find({name : name}, callback);
};

// 创建修改记录的静态方法
studentSchema.statics.xiugai = function(conditions, update, options, callback){
	this.model("Student").update(conditions, update, options, callback);
};


// 创建了一个模型，就是学生模型，也可以说是学习类
//类是基于Schema创建的
var studentModel = db.model('Student', studentSchema);

//向外暴露
module.exports = studentModel;