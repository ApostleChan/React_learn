// ReactStackForm.js
import React from "react";

class ReactStackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'mobx'}
    }
    // 表单提交的响应函数
    handleSubmit = (event) => {
        this.setState({value: event.target.value})
    }
    // 监听下拉列表的变化
    handleChanged =  (event) =>{
        this.setState({value: event.target.value})
    }
    render() {
        console.log(this.state.value)
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择元素：
                {/*    select的value属性定义当前哪个option元素处于选中状态*/}
                    <select value={this.state.value} onChange={this.handleChanged}>
                        <option value="react">React</option>
                        <option value="redux">Redux</option>
                        <option value="mobx">Mobx</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}

export default ReactStackForm;