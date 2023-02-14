import React, {Component} from "react";
import {ErrorBundary} from "./ErrorBoundary";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {name: "react"}
        }
    }

    // 将user置为null，模拟异常
    onClick = () => {
        this.setState({user: null});
    }

    render() {
        return (
            <div>
                <ErrorBundary>
                    <Profile user={this.state.user}/>
                </ErrorBundary>
                <button onClick={this.onClick}>更新</button>
            </div>
        )
    }
}
