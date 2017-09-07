<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <!-- 添加图片 start -->
    <input type='file' name='fileInput' id='fileInput' v-on:change='showImg'/>
    <img :src ="buffer"/>
    <!-- 添加图片 end -->
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://gitter.im/vuejs/vue" target="_blank">Gitter Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
      <br>
      <li><a href="http://vuejs-templates.github.io/webpack/" target="_blank">Docs for This Template</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>

var thisa;
export default {
  name: 'hello',
  data () {

    //studyEs6_var_let_const();

    //studyEs6_array();

    //studyEs6_object();

    //studyEs6_string();

    //studyEs6_fun();

    //studyEs6_Symbol();

    //studyEs6_set_weakset();

    //studyEs6_map_weakmap();

    //studyEs6_iterator();

    //studyEs6_generator();

    //study_promise();

    //studyEs6_async();

    //studyEs6_arrowFun();

    //studyEs6_class();

    //studyEs6_proxy();

    //studyEs6_decorator();

    //studyEs6_model();

    studyEs6_binaryArray();


    return {
      buffer:'data:image/png;base64,',//在此处添加buffer定义
      msg: 'Welcome to Your Vue.js App'
    }
  },created() {
    thisa = this;
  }, methods: {
     showImg:function(){
      //alert(thisa);
      var fileInput = document.getElementById('fileInput');
      //alert(fileInput);
      var file = fileInput.files[0];
      //alert(file);
      var reader = new FileReader();
      //alert(reader);
      reader.readAsArrayBuffer(file);
      reader.onload = function () {
        var arrayBuffer = reader.result;//reader.result.toByteArray;
        //alert(thisa.msg);
        let arrayBase = arrayBufferToBase64(arrayBuffer);
        thisa.buffer='data:image/png;base64,'+arrayBase;
      };
    }
  }
}

function arrayBufferToBase64( buffer ) {
  var binary = '';
  var bytes = new Uint8Array( buffer );
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
      binary += String.fromCharCode( bytes[ i ] );
  }
  return window.btoa( binary );
}

//1、变量声明
function studyEs6_var_let_const() {
  var a = 3;
  {
      var b = 4;
  }
  alert(a);
  alert(b);
}

//2.数组结构
function studyEs6_array() {
  //基本结构
  //let [a, b, c,d] = ["aa", "bb", 77,88]; 
  //alert(d);
  
  //嵌套数组结构 
  //let [a,b,[c,d],e] =["aa",'bb',[33,44],55]; 
  //alert(c);
  
  //空缺变量 
  //let [a,b,,e] =["aa",'bb',[33,44],55]; 
  //alert(e);

  //多余变量 
  //let [a,b,,e,f] =["aa",'bb',[33,44],55]; 
  //alert(f);

  //默认值 
  //let [a,b,,e,f='hello'] =["aa",'bb',[33,44],55]; 
  //alert(f);

}

//3.对象结构 
function studyEs6_object() {
  //let obj={uid:121,uname:'张三'}; 
  let obj=new Object(); 
  obj.uid=222; 
  obj.uname='李四'; 
  
  //在此做结构映射
  //let {uid:id,uname:name}=obj; //顺序改变无影响 
  //alert(name); 

  //----------
  //小括号形式： 
  let uid,uname; //小括号中的变量名称，必须是事先定义好的变量
  ({uid,uname} = obj); //必须有小括号，否则{}就会被解读为语句块 
  alert(uname);

  //嵌套
  let a, b, c;
  obj.arr = ['aa', 'bb'];
  ({arr:[a,b,c='cc']} = obj);//嵌套也可以有默认值
  alert(c);

}

//4.字符串结构
function studyEs6_string() {
  //字符串结构 
  let [aa,bb,cc,dd] = "中国你好"
  alert(aa);
}

//4.函数参数结构 
function studyEs6_fun() {
  //let obj={uid:121,uname:'张三'}; 
  let obj=new Object(); 
  obj.uid=222; 
  obj.uname='李四'; 
  analysis(obj);
}

function analysis({uid,uname}){ 
    alert(uid); 
    alert(uname); 
} 

//5.Symbol
function studyEs6_Symbol(){
  //Symbol是ES6新增的一种值类型数据，表示一种绝不重复的值
  let s1 = Symbol(33); 
  let s2 = Symbol(33); 
  alert(s1.toString()); 
  alert(s1==s2);  
} 

//6.set、weakset
function studyEs6_set_weakset() { 
  //Set和WeakSet 数据结构是ES6新增。   
  //它与数组非常相似，但是Set数据结构的成员都是唯一的。   
  //特别说明:Set中只能添加一个NaN。 

  //Set数据结构:   
  //var set = new Set([1, 2, 3, 4, 2, 8, 4]); //两个2、4
  var set = new Set();
  [1, 2, 3, 4, 2, 8, 4].map(function(elem){
    set.add(elem);
  });
  
  //------扩展运算符--------------   
  var set = new Set([1, 2, 3, 4, 2, 8, 4]);   
  var arr = [...set];//扩展运算符（…）内部使用for…of循环,   
  //console.log(arr);   

  //删除
  //set.delete(2);
  //清空
  //set.clear();

  //遍历键值
  //从输出结果可以看出，键和键值是相同的。   
  set.forEach(function (value, key) {   
    //console.log(value+'='+key);   
  })

  //-----判断set中是否含有----   
  //console.log(set.has(8));   

  //----遍历值--------   
  let setIter = set.values();   
  for(let val of setIter) {   
    //console.log(val);   
  }   

  //----数量---------   
  //console.log("size:",set.size);   


  //-------map和filter也可以用于set中-------- 
  //es5中数组新增map和filter方法 
  //map:映射的意思，映射返回一个新数组，有返回值;filterArr:返回一个新对象 
  var mySet = new Set();
  var mapArr = [1, 2, 3, 4, 2, 8, 4].map(function(value, index, array ){ 
    mySet.add(value * value);
    return value * value; 
  });

  var filterArr = [1, 2, 3, 4, 2, 8, 4].filter(function(elem){
    if (elem > 3){
      return true;
    }
    return false;
  });

  for (let elem of mySet) { //for...of遍历   
    //console.log(elem)   
  }  

  let set1 = new Set([1, 2, 3]);   
  set1 = new Set([...set1].map(x => x * 2));   
  var arr1 = [...set1];   
  //console.log(arr1);   
  // 返回Set结构：{2, 4, 6}   

  let set2 = new Set([1, 2, 3, 4, 5]);   
  set2 = new Set([...set].filter(x => (x % 2) == 0));   
  var arr2 = [...set2];   
  //console.log(arr2);

   


  //---------------求并集、交集、差集--------------   
  //因此使用Set可以很容易地实现并集（Union）、交集（Intersect）和差集（Difference）。   
  let a = new Set([1, 2, 3]);  
  let b = new Set([4, 3, 2]);  
  //--求并集
  let union = new Set([...a,...b]);
  //console.log("并集：",[...union]);
  //---就交集
  let intersect = [...a].filter(elem => b.has(elem));
  //console.log("交集：",intersect);
  //---求差集
  let difference  = [...a].filter(elem => !b.has(elem));
  //console.log("差集：",difference);


  //WeakSet数据结构   
  //它与Set十分相似，对象的值也不能是重复的，与Set不同点:   
  //1.WeakSet成员只能够是对象。   
  //2.作为WeakSet成员的对象都是弱引用，即垃圾回收机制不考虑WeakSet对该对象的引用，也就是说，如果其他对象都不再引用该对象，那么垃圾回收机制会自动回收该对象所占用的内存，不考虑该对象还存在于WeakSet之中。这个特点意味着，无法引用WeakSet的成员，因此WeakSet是不可遍历的。   
  //3.使用WeakSet存储对象实例的好处是，由于是对对象实例的引用，不会被计入内存回收机制，所以删除实例的时候，不用考虑weakset，也不会出现内存泄漏。


  var weakset = new WeakSet();   
  //weakset.add(5); //错误   
  let num = new Number(5);
  //添加   
  weakset.add(num);
  weakset.add({});        

  var weakset2 = new WeakSet([[1, 2], [3, 4]]);   
  
  var weakset3 = new WeakSet();   
  let aObj = {a:'aa'};   
  let bObj = new String("你好");   
  let cObj = new Number(8);   
  weakset3.add(aObj);   
  weakset3.add(bObj);   
  weakset3.add(cObj);   
  console.log(weakset3);
  //---删除-----   
  weakset3.delete(aObj);   
  bObj=null;      //把对象删除，weakset中的对象也没了   
  console.log(weakset3.has(bObj));
  //weakset不能取值，也不能显示，只用来表示是否有重复的对象                                 

}

function studyEs6_map_weakmap() {
  //1.对象
  //---------对象--------------------------- 
  let keyObj = {}; 
  let dataObj = {}; 
  let obj = new Object();
  obj[keyObj] = 11; 
  obj[dataObj] = 22; 
  //虽然表面上看dataObj对象的键是对象keyObj，其实不是，dataObj[keyObj]会将keyObj转换转为字符串"[object Object]"。 

  for(let key in obj) {
    //console.log(key);
  }

  //Map
  var mapData = new Map(); 
  var objKey = {p: "antzone"}; 
  mapData.set(objKey, "对象键");    //添加新元素 
  //console.log(objKey);
  //console.log(mapData.get(objKey)); //获取 
  //console.log(mapData.has(objKey));  //判断是否含有 
  //console.log(mapData.delete(objKey)); //删除键 
  mapData.clear();    //清空 

  //2.数组作为构造函数参数 
  var mapData = new Map([["webName", "百度"], ["url", "www.baidu.com"]]); 
  //console.log(mapData.size); 
  //console.log(mapData.has("webName")); 
  //console.log(mapData.get("webName")); 
  //console.log(mapData.has("url")); 
  //console.log(mapData.get("url")); 

  var arr = [["webName", "百度"], ["url", "www.baidu.com"]]; 
  var mapData2 = new Map(); 
  arr.forEach(([key, value]) => mapData2.set(key, value)); 

  //遍历
  mapData2.forEach(function (value,key) { 
    //console.log(value,key); 
  }) 

  //3.由于Map对象的键可以是对象，所以只有对同一个对象的引用，Map对象才将其视为同一个键。 
  //NaN不严格相等于自身，但Map将其视为同一个键 
  let mapData3 = new Map(); 
  mapData3.set(NaN, 5); 
  //console.log(mapData3.get(NaN)); 
  mapData3.set(-0, 5); 
  //console.log(mapData3.get(+0)); 

  //4.Map遍历 
  //---------转成数组----------- 
  var mapData4 = new Map([["webName", "baidu"], ["url", "www.baidu.com"]]); 
  var arr = [...mapData4]; 
  //console.log(arr); 

  //---------for--of循环-------- 
  var mapData5 = new Map([["webName", "资源库"], ["url", "www.yuankuwang.com"]]); 
  for(let elem of mapData5) { 
    //console.log(elem); //键值对数组
  } 

  //----------其他函数------------- 
  var keyIterator = mapData.keys();//键遍历器
  //console.log(keyIterator);
  var valueIterator = mapData.values();  //值遍历器
  //console.log("遍历器取值",keyIterator.next().value);   //遍历器用法
  //console.log("遍历器取值",keyIterator.next().value);   //遍历器用法
   
  //console.log(valueIterator); 
  var size = mapData.size;      //键值对数量 
  //console.log(size); 

  //二、WeakMap数据结构 
  //WeakMap结构与Map结构基本类似。 
  //区别是它只接受对象作为键名，不接受其他类型的值作为键名。键名是对象的弱引用，当对象被回收后，WeakMap自动移除对应的键值对，WeakMap结构有助于防止内存泄漏。 

  var wm = new WeakMap(); 
  var obj2 = new Object(); 
  wm.set(obj2,'对象1'); 
  //wm.delete(obj2);
  obj2=null; 
  console.log(wm.get(obj2));    //undefined 
  console.log(wm.has(obj2));    //false 
   
  //由于WeakMap对象不可遍历，所以没有size属性。  

}

//Iterator遍历器:
function studyEs6_iterator() {

  //遍历器是一种接口，它为不同的数据结构提供了统一的访问机制。 
  //如果一个数据结构具有遍历器接口，那么就可以依次处理该数据结构的成员。 
  //当前javascript用来表示集合的数据结构有四种，分别是数组、对象、Set和Map，并且这四种数据结构可以相互嵌套使用，比如数组的成员可以是对象，对象的成员又可以是Set等等。 

  //一.遍历器接口: 
  //如果一个结构具有Symbol.iterator属性，那么就称这个数据结构具有遍历器接口。 
  //Symbol.iterator返回Symbol对象的iterator属性，这是一个预定义好的、类型为Symbol的特殊值。 
  //Symbol.iterator属性指向一个方法，调用此方法返回一个遍历器对象，它是一个指针对象，默认指向数据结构的起始位置。 
  let arr = ["源库网", 4, "www.yuankuwang.com", "北京大学"]; 
  let it = arr[Symbol.iterator](); 
  //console.log(it.next()); 
  //console.log(it.next()); 
  //console.log(it.next()); 
  //console.log(it.next()); 
  //console.log(it.next());//最后一个done:为true

  //每一次调用next()方法都会返回一个对象，此对象包含value和done属性，value属性值是数据结构成员的值，如果遍历完成value属性值为undefined；done属性是一个布尔值，如果为true，说明遍历完成，如果为false，说明遍历尚未完成
  
  //使用for(;;)比while(true)快4倍
  for(;;){
    let elem = it.next();
    if (elem.done){
      break;
    }
    //console.log(elem.value);
  }

  //使用for-of
  var arr2 = [1,2,3,'aa','bb','cc']; 
  for(let elem of arr2) { 
    //console.log(elem); 
  } 

  //某些类数组： 
  let obj = { 
    data: ["aa","bb",'cc',3,9,8], 
    [Symbol.iterator]() { 
      const self = this; 
      let index = 0; 
      return { 
        next() { 
          if (index < self.data.length) { 
            return { 
              value: self.data[index++], 
              done: false 
            }; 
          } else { 
            return { value: undefined, done: true }; 
          } 
        } 
      }; 
    } 
  }; 
  let iter = obj[Symbol.iterator](); 
  console.log(iter.next().value) 
}

//Generator函数结构
function studyEs6_generator() {
  //Generator函数是ES6新增的一种异步编程方案。 
  //说明:Generator函数指的是一种新的语法结构,是一个遍历器对象生成器,它内部可以封装多个状态，非常适合用于异步操作。 
 
  //Generator函数语法和普通的function函数类似，但是有三个不同点: 
  //（1）function关键字和函数名称之间有一个星号（*）。 
  //（2）函数体内可以使用yield语句。 
  //（3）函数调用后不会立即执行，返回的是一个遍历器对象。 

  //一个Generator函数 
  function* yuanku() { 
    yield "源库网"; 
    yield "北京海淀"; 
    yield "www.yuankuwang.com"; 
    return "end";  
  } 

  //函数内部使用yield语句定义不同的状态，return也可以定义一个状态，也就是说上面代码有四个状态 
  var y = yuanku(); //调用此函数，并不会立即执行它其中的代码，而是返回一个遍历器对象 
  console.log(y.next()); //返回一个具有value和done属性的对象 
  console.log(y.next());
  console.log(y.next());
  console.log(y.next()); //有return,返回{value:end,done:true};如果没有return，返回{value: undefined, done: true} 

  //yield语句: 
  //每一个yield语句定义不同的状态,它也是一个代码执行暂停标识。 
  //yield语句不能在普通函数中使用，否则会报错。 
  //调用Generator函数可以返回一个遍历器对象,要想访问Generator函数中的每一个状态，需要使用遍历器对象调用next()方法。 

  //如果yield语句作为其他语句的一部分，那么必须使用小括号包裹，否则会报错 
  function *yuanku2() { 
    //console.log("欢迎来到" + yield "源库网");//报错 
    console.log("欢迎来到" + (yield "源库网"));//正确 
  } 
  let y2 = yuanku2(); 
  console.log(y2.next().value); //先返回yield 
  console.log(y2.next("jack").value); //再返回return,yield为undefined 

  //next()方法: 
  //next()一个主要功能，就是从暂停状态继续下一段代码的执行。 
  //next()还有一个重要的功能，那就是可以接受一个参数，此参数作为上一个yield语句的返回值。 
  //虽然当代码执行到yield语句的时候，能够将其后面的表达式的值作为对象的value属性值，但是默认情况下yield语句是没有返回值的，或者说它的返回值是undefined 
  function *yuanku3() { 
    let x = yield "你好";  //默认无返回值 
    console.log(x);      //输出undefined 
  } 
  var y3 = yuanku3(); 
  console.log(y3.next()); 
  console.log(y3.next()); 
  //注意：yield语句的返回值和yield后面表达式的返回值是两个概念 

  console.log("---------yuanku4-----------");

  //向next中传值，!!!此值作为上一个yield的返回值!!! 
  function* yuanku4(num) { 
    let x = 2 * (yield num); 
    console.log('x='+x); 
    let y = yield x*3; 
    console.log('y='+y); 
    console.log(x,y); 
  } 
  var g = yuanku4(5); 
  console.log(g.next());//{value:5,done:false},第1个next传值无意义，因为没有上一个yield 
  //console.log(g.next());//x=NaN {value:NaN,done:false} 
  console.log(g.next(3));//{value:18,done:true} 
  console.log(g.next(3));//{value:undefined,done:true}

  console.log("---------异步方法实测-----------");
  //-----------异步方法实测-------------------------
  /*setTimeout(function () {
    console.log("hello");
  },3000);*/

  let z;
  var func = function(time) {
    setTimeout(function() {
        console.log(time, "  on");
        z.next(true);//用next()来控制步调
    }, time);
  };

  var gen = function * () {
      var f1 = yield func(3000);
      console.log('f1:', f1);
      var f2 = yield func(1000);
      console.log('f2:', f2);
  };

  z = gen();

  z.next();

  console.log('end'); 

}

//Promise对象
function study_promise() {
  //传统实现异步操作就是采用回调函数，回调函数方式本身没有什么问题，但是在多重回调层层嵌套的情况下，那么代码的可阅读性就会出现问题。
  //Promise对象是一个新的异步操作解决方案，比原有的回调函数等方式更为合理
  //Promise对象具有三种状态：Pending（等待）、Resolved（已完成）和Rejected（未完成）。
  //Promise对象状态的改变只有两种可能：Pending转变为Resolved或者Pending转变为Rejected。
  
  let param; //传递参数载体

  function p1() {
    
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log("aaaaa");
        //resolve(123);//注意：这里面123是给最后传结果的，不是给下一个p2传递的,如果需要传参，则用载体
        param='第1';
        reject(123);
       },3000);
    });
  }

  function p2() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log("bbbbb");
        //resolve(345);
        reject(123);
       },2000);
    });
  }

  function p3() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log("ccccc");
        resolve(567);
        console.log("收到传参："+ param);
        param = "我是567";
       },1000);
    });
  }

  function p4() {
    return new Promise(function(resolve, reject) {
      setTimeout(function () {
        console.log("ddddd");
        console.log("收到传参："+ param);
       },500);
    });
  }

  p1().then(p2).then(p3).then(function(data){
    console.log("收到参数："+data);
  }).catch(function(err){
    console.log("出错："+err);
    if (err == 123) {//通过错误可以控制，如果是第1步出错，则可以跳到第3步
      p3().then(p4);
    }
  });

}

//async函数
function studyEs6_async() {
  //Async/Await应该是目前最简单的异步方案了,ES7 中新增了 async/await 两个关键词。async 可以声明一个异步函数，此函数需要返回一个 Promise 对象。await 可以等待一个 Promise 对象 resolve，并拿到结果。

  var sleep = function (time) {
    return new Promise(function (resolve, reject) {
      console.log('执行');
      setTimeout(function () {
          resolve("ok");
          //reject("出错！")
      }, time);
    })
  };


  //async 表示这是一个async函数，await只能用在这个函数里面。
  //await 表示在这里等待promise返回结果了，再继续执行。
  //await 后面跟着的应该是一个promise对象（当然，其他函数也没关系，只是会立即执行，不过那样就没有意义了）

  var start = async function () {//异步函数
      
      try {
        // 在这里使用起来就像同步代码那样直观
        console.log('start');
        //获得返回值 await等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值。
        let rs = await sleep(3000);//等待执行
        console.log('end', rs);//如果出错，下面的代码则不会执行
      } catch(err) {//捕捉错误 既然.then(..)不用写了，那么.catch(..)也不用写，可以直接用标准的try catch语法捕捉错误。
        console.log(err);
      }
  };

  //start();

  //循环多个await await看起来就像是同步代码，所以可以理所当然的写在for循环里，不必担心以往需要闭包才能解决的问题。
  /*var start2 = async function () {
    for (var i = 1; i <= 10; i++) {
        console.log(`当前是第${i}次等待..`);
        await sleep(1000);
    }
  };
  start2();*/

  var start3 = async function() {
    let 一到十 = [1,2,3,4,5,6,7,8,9,10];

    // 错误示范
    /*一到十.forEach(function (v) {//嵌套了函数
        console.log(`当前是第${v}次等待..`);
        await sleep(1000); // 错误!! await只能在async函数中运行
    });*/

    console.log('start');
    // 正确示范
    for(var v of 一到十) {
        console.log(`当前是第${v}次等待..`);
        await sleep(1000); // 正确, for循环的上下文还在async函数中
    } 
    console.log('end');
  }
  start3();
  

}

//箭头函数
function studyEs6_arrowFun() {
  //1.单参数
  //普通写法
  function cheng(a=3){
      return a*a;
  }
  //箭头写法
  let cheng2 = (a=3)=>a*a;
  console.log(cheng(9));
  console.log(cheng2(9));

  console.log("----2.多参数----");
  //2.多参数
  //普通写法
  function add(a,b){
      return a+b;
  }
  //箭头写法
  let add2 = (a,b)=>a+b;   //默认返回值
  console.log(add(3,9));
  console.log(add2(3,9));

  console.log("----3.无返回值----");
  //3.无返回值
  function add3(a,b){
      console.log(a+b);
  }
  let add4 = (a,b)=>{console.log(a+b)};//参数用小括号，方法体用带花括号
  add3(3,9);
  add4(3,9);

  
  console.log("----4.多行----");
  function add5(a,b){
      console.log(a+b);
      return a+b;
  }
  let add6 = (a,b)=>{
      console.log(a+b);
      return a+b;
  };
  console.log(add5(3,9));
  console.log(add6(3,9));


  var o = {
      x : 121,
      func : function() { console.log(this.x) },//this表示o
      test : function() {
          setTimeout(function() {
              //alert(this); //使用了异步，发生了指针转移，this指针转为全局
              //this.func();
          }, 1000);
      }
  };
  o.test();  // TypeError : this.func is not a function

  //----改为箭头函数,使用箭头函数就是为了指针安全且更方便。
  var o2 = {
      x : 234,
      func : function() { console.log(this.x) },
      test : function() {
          setTimeout(() => { 
            alert(this);//在这里this就是指向了o2
            this.func();
          }, 100);
      }
  };
  o2.test();    //这回this就指向o了 

}

//class类
function studyEs6_class() {
  //以前的写法
  /*function A(id, name) {
    this.id = id;
    this.name = name;
    this.myfun = function(){
      alert(this.name);
    }
  }
  let a = new A(11, "张三");
  a.myfun();*/

  //ES6新写法
  class Person {  
    constructor(name, age, job) {  
      this.name = name;  
      this.age = age;  
      this.job = job;  
      this.friends = ['Shelby','Court'];  
    }  
    sayName () {  
      console.log(this.name);  
    }  
    //没有方法重载
  }  
  let person = new Person('张三',26,'司机');  
  person.sayName();  

  //2.静态方法：  
  class Point {  
      constructor(x, y) {  
          this.x = x;  
          this.y = y;  
      }  
    
      static distance(a, b) {  
          const dx = a.x - b.x;  
          const dy = a.y - b.y;  
    
          return Math.sqrt(dx*dx + dy*dy);  
      }  
  }  
    
  const p1 = new Point(5, 5);  
  const p2 = new Point(10, 10);  
    
  console.log(Point.distance(p1, p2));  

  //3.ES6明确规定，Class内部只有静态方法，没有静态属性，但可以用另外方式解决 
  class Foo {  
  }  
  Foo.prop = 1;  
  console.log(Foo.prop) // 1  
    
  //---单例模式  
  class Cache {
    constructor(){
      this.id = 123;
      this.name = "五五";
    }
    static getInstance() {  
      if (!Cache.instance) {
        console.log("创建");
        Cache.instance = new Cache();  
      }  
      return Cache.instance;  
    }  
  }  
  
  var cache = Cache.getInstance();  
  var cache2 = Cache.getInstance();  
  var cache3 = Cache.getInstance();  
  console.log(cache3.name);

  //4.继承：  
  class Animal {   
    constructor(name) {  
      this.name = name;  
    }  

    speak() {  
      console.log(this.name + ' makes a noise.');  
    }  
  }  
  
  class Dog extends Animal {  //这种只能是单继承
    speak() {//重写是支持的
      console.log(this.name + ' barks.');  
    }  
  }  
  let dog = new Dog('旺财');  
  dog.speak();    


}

//proxy代理
function studyEs6_proxy() {
  //类
  class Register{}
  let r = new Register;
  //r.id = 123;//等于r.set
  //r.name = '张三';
  //console.log(r.name);//等于r.get

  //代理
  let p = new Proxy(r, {
    get:function(target, key){
      console.log('调用get方法');
      return target[key];
    },
    set:function(target, key, value){

      if (key == 'id') {
        if (value == 15) {
          target['prefix'] = ',此人是逃犯'
        } else {
          target['prefix'] = '';
        }
      } 

      if (key == 'name') {
        value += target['prefix'];
      }
      target[key] = value;
      console.log('调用set方法');
      console.log('key:' + key);
      console.log('value:' + value);
      return Reflect.set(target, key, value);  
    }
  });

  //代理Register类
  //代理.运算符
  p.id = 15;
  p.name = '张三';
  console.log(p.name);

}

//修饰器
function studyEs6_decorator() {
  //选课
  function chooseCourse(target) {
    console.log('调用', target);
    target.course = '物理';
  }

  //添加学习方法
  function setStudy(target){
    target.study = function(){
      console.log('学习', target.course);
    }
  }

  @chooseCourse
  @setStudy
  class Student{}
  Student.study();

  //2.修饰器带参数  
  function chooseCourse2(courseName){  
    return function(target){  
        target.courseName=courseName;  
    }  
  }  
  function classroom2(roomName){  
    return function(target){  
        target.study=function(){  
          console.log('在'+roomName+'学习'+target.courseName);  
        }  
    }  
  }  
  @chooseCourse2('物理')  
  @classroom2('第1教室')  
  class Student2 {   }  
  Student2.study();  
  Student2.study();


  //3.修饰器不仅可以修饰类，还可以修饰类的方法(属性)  
  function chooseCourse3(courseName){  
    return function(target){  
      console.log('检查准考证:'+target.uid);  //target中的this发生指针转移  
      target.courseName=courseName;  
    }  
  }  
  class Student3 {  
    constructor(){  
      this.uid=15;  
    }  
    @chooseCourse3('物理')  
    exam(){  
      console.log(this.uid+'考试,考:'+this.courseName);  
    }  
  }  

  let student = new Student3();  
  student.uid=15;  
  student.exam();  

}

//ES6导入 可以为每个导入设置别名如：year as yy,使用时，就直接用yy
//import {webName,url,year as yy} from '../models/modeltest.js';
//ES6全部导入，但是要取别名，使用时如：uu.webName、uu.url等。
//import User,* as uu from '../models/modeltest.js';
import Student,* as uu from '../models/modelchild.js';

//ES5导入
//var uu = require('../models/modeltest');

//model模块
function studyEs6_model() {
  //console.log("webName=" + webName);
  //console.log("url="+url);
  //console.log("year=" + yy);
  console.log("webName=" + uu.webName);
  console.log("url="+ uu.url);
  console.log("year=" + uu.year);

  console.log("add: "+uu.add(8,7));
  var user = new uu.User();//在import里面明确导入
  var student = new Student();
}

//二进制数组
function studyEs6_binaryArray() {
  //查看
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
