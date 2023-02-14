import React from "react";

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    componentDidCatch(error, errorInfo) {
        // 显示错误UI
        this.setState({hasError: true})
        // 同时打印错误信息
        console.log(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return <h1>貌似发生了一些错误！</h1>;
        }
        return this.props.children;
    }

}