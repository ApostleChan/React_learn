// PostList.js
import React, {Component} from "react";
import PostItem from "./PostItem";
import './PostList.css'; // 要保证相对路径设置正确

class PostList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: []
        }
        this.timer = null; // 定时器
        this.handleVote = this.handleVote.bind(this);  //ES6 class中手动绑定方法的this指向
    }

    componentDidMount() {
        // 用setTimeout模拟异步从服务端获取数据
        this.timer = setTimeout(() => {
            this.setState({
                posts: [
                    {id: 1, title: '这是你要的嘛？', author: "南陵笑笑生", date: '2023-02-09 1:24', vote: 0},
                    {id: 2, title: '我欲乘风归', author: "南陵笑笑生", date: '2023-02-09 1:24', vote: 0},
                    {id: 3, title: '月下共舞？', author: "南陵笑笑生", date: '2023-02-09 1:24', vote: 0},
                ]
            });
        }, 1000);
    }

    componentWillUnmount() {
        if (this.timer) {
            clearTimeout(this.timer); //清除定时器
        }
    }

    handleVote(id) {
        // 根据帖子id进行过滤，找到待修改vote属性的帖子，返回新的posts对象
        const posts = this.state.posts.map(item => {
            const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
            return newItem
        });
        // 使用新的posts对象设置state
        this.setState({
            posts
        });
    }

    // 保存帖子
    handleSave(post){
        // 根据post的id，过滤出当前要更新的post
        const  posts = this.state.map(
            item => {
                const newItem = item.id === post.id ? post : item;
                return newItem;
            }
        )
        this.setState({
            posts
        })
    }

    render() {
        return (
            <div>
                <h2>话题列表</h2>
                <ul>
                    {this.state.posts.map(item =>
                        <PostItem
                            key={item.id}
                            post={item}
                            onVote={this.handleVote}
                            onSave={this.handleSave}
                        />
                    )}
                </ul>
            </div>
        );
    }
}


// function Welcome(props) {
//     return <h1
//         style={{
//             width: "100%",
//             height: "50px",
//             backgroundColor: "blue",
//             fontSize: "20px"
//         }}
//         className='foo'>Hello, {props.name}</h1>;
// }

export default PostList;