import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            flag: false,
            data: [],
        };
    }

    handleClick = (event) => {
        this.flag = !this.flag;
        this.setState({flag: this.flag});
    }

    componentDidMount() {
        // 模拟从服务请求的数据
        this.setState({
            data: [
                {id: 1, title: "藏器于身"},
                {id: 2, title: "潜龙勿用"},
                {id: 3, title: "似水流年"},
                {id: 4, title: "万物生长"},
            ],
        })

    }

    render() {
        return (
            <div>
                {/*控制元素显示不显示，本身已经渲染出来了*/}
                <div style={{
                    display: this.flag ? "block" : "None"
                }}>显示
                </div>
                {/*控制元素渲染或不渲染*/}
                {this.flag ? <button>渲染/不渲染</button> : null}
                <button onClick={this.handleClick}>点击隐藏/显示</button>

                <ul>
                    {this.state.data.map((item, index) => {
                        // 循环创建的元素一定要设置key属性，属性值是本次循环中的唯一值 [优化DOM-DIFF]
                        return <li key={index + 1}>{index + 1}.{item.title}</li>;
                    })}
                </ul>
            </div>

        )
    }
}

export default App;