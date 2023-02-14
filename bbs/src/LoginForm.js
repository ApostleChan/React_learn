import React from "react";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '123', password: '123'}
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    // 监听两个用户和密码的两个input值的变化
    handleChange(event) {
        const target = event.target;
        this.state(
            {[target.name]: target.value}
        );
    }

    // 表单提交的响应函数
    handleSubmit(event) {
        console.log('login successful');
        event.preventDefault(); // 阻止默认事件
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    用户名：
                {/*    通过value设置input显示内容， 通过onchange监听value变化*/}
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
                </label>
                <label>
                    密码：
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                </label>
                <input type="submit" value="登陆"/>
            </form>
        )
    }
}

export default LoginForm;