//引包
var mongoose = require('mongoose');
//链接数据库
mongoose.connect('mongodb://localhost/animal');

//创建了一个猫的模型，所有的猫都有名字，名字的类型是字符串，也叫类
var Cat = mongoose.model('Cat', { name: String });

//实例化一只猫
var kitty = new Cat({ name: 'Zildjian' });
//调用这只猫的save方法，保存这只猫，save方法与身俱来，mongoose封装。
kitty.save(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('喵喵喵....');
	}
});

//实例化另一只猫
var tom = new Cat({ name: 'Tom' });
//保存它
tom.save(function (err) {
	if (err) {
		console.log(err);
	} else {
		console.log('喵喵喵....');
	}
});