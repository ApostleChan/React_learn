// PostList.js
import React, {Component} from "react";
import PostItem from "./PostItem";

// 真实项目中，帖子数据一般从服务器端获取
// 这里定义常量data存储列表数据
const data = [
    {title:'这是你要的嘛？', author:"南陵笑笑生", date:'2023-02-09 1:24'},
    {title:'我欲乘风归', author:"南陵笑笑生", date:'2023-02-09 1:24'},
    {title:'月下共舞？', author:"南陵笑笑生", date:'2023-02-09 1:24'},
];
class PostList extends Component{
    render(){
        return(
            <div>
                {data.map(item=>
                    <PostItem
                        title={item.title}
                        author={item.author}
                        data={item.date}
                    />
                )}
            </div>
        );
    }
}

export default PostList;