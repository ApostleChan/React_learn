// ReactStacksForm.js
import React from "react";

class ReactStackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {react: false, redux:false, mobx: false};
    }
    // 表单提交的响应函数
    handleSubmit = (event) => {
        event.preventDefault();
    }
    // 监听复选框变化，设置复选框的checked状态
    handleChanged =  (event) =>{
        this.setState({[event.target.name]: event.target.checked});
    }
    render() {
        console.log(this.state)
        return (
            <form onSubmit={this.handleSubmit}>
                {/*设置3个复选框*/}
                <label>React
                    <input type="checkbox"
                           name="react"
                           value="react"
                           checked={this.state.react}
                           onChange={this.handleChanged}
                    />
                </label>
                <label>Redux
                    <input type="checkbox"
                           name="redux"
                           value="redux"
                           checked={this.state.redux}
                           onChange={this.handleChanged}
                    />
                </label>
                <label>Mobx
                    <input type="checkbox"
                           name="mobx"
                           value="mobx"
                           checked={this.state.mobx}
                           onChange={this.handleChanged}
                    />
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default ReactStackForm;