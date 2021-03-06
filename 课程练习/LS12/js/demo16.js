/**
 * Created by qile on 2017/9/26.
 */

//配合index16.html 实现函数相关知识的综合练习（闭包、IIFE、作用域）
window.onload = function () {
    var btns = document.getElementsByClassName("btn");
    function closureExample(objID) {
        var ol = document.getElementById(objID);
        //var li = document.createElement("li");//这样只会有一个li
        return function () {
            var li = document.createElement("li");
            li.innerHTML = "xxxxx";
            ol.appendChild(li);
            //console.log(new Date());
        };
    }
    var foo = closureExample("orderList");
    for(var i=0;i<3;i++){
        (function (j) {
            btns[j].onclick = function () {
                //console.log(new Date());
                setTimeout(foo,(3*j+2)*1000);
            };
        }(i));
    }
};

