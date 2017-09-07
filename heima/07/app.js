
//定义了一个模型，学生模型，“学生类”
var Student = require("./models/Student");
/*

//实例化了一个学生类
var xiaoming = new Student({"name" : "小明", "age" : 18, "sex" : "男"});

//保存这个学生类
xiaoming.save(function(){
	console.log("保存成功！");
});

//另一种实例化和保存方式
Student.create({"name" : "小红", "age" : 19, "sex" : "女"}, function (error) {
	console.log("保存成功");
});

Student.zhaoren("小明", function(err, result){
	console.log(result);
});
*/

Student.xiugai({"name":"小明"}, {$set:{age : 20, sex : "女"}},{multi: true},function(){
	console.log("修改年龄成功！");
});