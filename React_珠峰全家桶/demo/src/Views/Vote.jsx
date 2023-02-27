import React from "react";
import PropTypes from "prop-types";
// 创建一个构造函数，要求必须继承于React.Component这个类

class Vote extends React.Component {
    static defaultProps = {
        // 属性校验规则
        num: 0
    }
    static propTypes = {
        title: PropTypes.string.isRequired,
    }
    state = {
        supNum: 0,
        oppNum: 3,
        title: this.props.title,
    }
    constructor(props) {
        super(props); // 会把传递进来的属性挂载到this实例
        console.log(this.props); // 获取到传递的属性
    }

    componmentWillMount() {
        console.log('componmentWillMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        // nextState:存储要修改的最新状态
        // this.state:存储的还是修改前状态 [此时状态还没有改变]
        console.log(this.state, nextState);
        // 此周期函数需要返回一个true或false
        // 返回true:允许更新，会继续执行下一个操作
        // 返回false：不允许更新，接下来啥都不处理
        return true;
     }

    UNSAFE_componentWillUpdate() {
        console.log('UNSAFE_componentWillUpdate');
    }

    componentDidUpdate() {
        console.log('componentDidUpdate');
    }

    hanldeClick = () => {
        this.setState({
            title: "更新后的标题"
        });
    }

    render() {
        return (
            <div onClick={this.hanldeClick}>
                <h1>{this.state.title}</h1>
            </div>
        )
    }
}

export default Vote;


// class Parent{
//     // new 的时候，执行构造函数
//     constructor(x, y) {
//         this.total = x + y;
//     }
//     num = 200; // 等价于this.num = 200;
//     getNum = ()=>{
//         // 箭头函数没有自己的this,所用到的是宿主环境中的this
//         console.log(this); // this->当前创建的实例
//     };
//     sum(){
//         // 类似于sum = function sum(){}不是箭头函数
//         // 它是给Parent.prototype上设置公共的方法【sum函数是不可枚举的】
//     };

//     // 把构造函数当做一个普通对象，为其设置静态私有属性方法 Parent.xxx
//     static avg = 1000;
//     static average(){

//     }

// };

// Parent.prototype.y = 2000; // 在外部手动给构造函数原生上设置公共的属性
// let p = new Parent(10, 20);
// console.log(p);