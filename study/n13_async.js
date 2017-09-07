/**
 * Created by jack on 2017/6/5.
 */

var async = require("async");

function oneFun() {
    /*setTimeout(function(){
     //需要递规调用，才能循环
     },1000);*/
    ii = 0;
    setInterval(function () {
        console.log("aaa = " + new Date());
        ii++;
        if (ii == 3) {
            clearInterval(this);
        }
    }, 1000);
    console.log("one Fun")
}

function twoFun() {
    jj = 0;
    setInterval(function () {
        console.log("bbb = " + new Date());
        jj++;
        if (jj == 3) {
            clearInterval(this);
        }
    }, 1000);
    console.log("two Fun")
}

//oneFun();
//twoFun();


function exec() {
    /*async.series({
        one: function (done) {
            ii = 0;
            setInterval(function () {
                console.log("aaa = " + new Date());
                ii++;
                if (ii == 3) {
                    clearInterval(this);
                    done(null, 'one完毕');
                }
            }, 1000);
        },
        two: function (done) {
            jj = 0;
            setInterval(function () {
                console.log("bbb = " + new Date());
                jj++;
                if (jj == 3) {
                    clearInterval(this);
                    done(null, 'two完毕');
                }
            }, 1000);
        }
    }, function(err, rs) {
        console.log(err, rs);
    });*/

    /*async.parallel({
        one: function (done) {
            ii = 0;
            setInterval(function () {
                console.log("aaa = " + new Date());
                ii++;
                if (ii == 3) {
                    clearInterval(this);
                    done(null, 'one完毕');
                }
            }, 1000);
        },
        two: function (done) {
            jj = 0;
            setInterval(function () {
                console.log("bbb = " + new Date());
                jj++;
                if (jj == 3) {
                    clearInterval(this);
                    done(null, 'two完毕');
                }
            }, 1000);
        }
    }, function(err, rs) {
        console.log(err, rs);
    });*/

    /*async.waterfall([
        function (done) {
            ii = 0;
            setInterval(function () {
                console.log("aaa = " + new Date());
                ii++;
                if (ii == 3) {
                    clearInterval(this);
                    done(null, 'one完毕');
                }
            }, 1000);
        },
        function (preValue, done) {
            jj = 0;
            setInterval(function () {
                console.log(preValue + " = " + new Date());
                jj++;
                if (jj == 3) {
                    clearInterval(this);
                    done(null, preValue+ ' ,two完毕');
                }
            }, 1000);
        }
    ], function(err, rs) {
        console.log(err, rs);
    });*/

    async.parallelLimit([
        function(callback){
            ii = 0;
            setInterval(function () {
                console.log("aaa = " + new Date());
                ii++;
                if (ii == 3) {
                    clearInterval(this);
                    callback(null, 'one');
                }
            }, 1000);

        },
        function(callback){
            jj = 0;
            setInterval(function () {
                console.log("bbb = " + new Date());
                jj++;
                if (jj == 3) {
                    clearInterval(this);
                    callback(null, 'two');
                }
            }, 1000);

        },
        function(callback){
            kk = 0;
            setInterval(function () {
                console.log("ccc = " + new Date());
                kk++;
                if (kk == 3) {
                    clearInterval(this);
                    callback(null, 'three');
                }
            }, 1000);

        }
    ],
    2, //只允许同时有两个函数并行
    function(err, results){
        console.log(results);
    });
}

exec();
console.log("main execute over");