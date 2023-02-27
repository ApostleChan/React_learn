import React from 'react';  // React语法核心
import ReactDOM from 'react-dom/client';    // 构建HTML(WebApp)的核心
import App from "./App";
import DemoOne from "./Views/DemoOne";
import Dialog from "./Views/Dialog";
import Vote from './Views/Vote';

// 获取页面中的#root的容器，作为“根”容器，注意：根容器不能使用HTML/BODY元素
const root = ReactDOM.createRoot(document.getElementById("root"));
// 基于render方法渲染我们编写的视图，把渲染后的内容，全部插入到#root元素中

root.render(
    <>
        <div style={{
            color:'red',
            fontSize: '19px'
        }}>hello world</div>
        <App/>

        <DemoOne title="hahaha" content='大家出门最好个人防护'/>

        <Dialog title='友情提示' content="好好学习"></Dialog>

        
        <Vote title='React很简单'/>
    </>
);