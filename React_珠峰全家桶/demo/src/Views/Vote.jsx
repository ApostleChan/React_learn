import React from "react";

// 创建一个构造函数，要求必须继承于React.Component这个类

class Vote extends React.Component {

}

export default Vote;


class Parent{
    // new 的时候，执行构造函数
    constructor(x, y) {
        this.total = x + y;
    }
    num = 200; // 等价于this.num = 200;
    getNum = ()=>{
        // 箭头函数没有自己的this,所用到的是宿主环境中的this
        console.log(this); // this->当前创建的实例
    };
    sum(){
        // 类似于sum = function sum(){}不是箭头函数
        // 它是给Parent.prototype上设置公共的方法【sum函数是不可枚举的】
    };

    // 把构造函数当做一个普通对象，为其设置静态私有属性方法 Parent.xxx
    static avg = 1000;
    static average(){

    }

};

Parent.prototype.y = 2000; // 在外部手动给构造函数原生上设置公共的属性
let p = new Parent(10, 20);
console.log(p);