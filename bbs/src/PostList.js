// PostList.js
import React, {Component} from "react";

class PostList extends Component{
    render(){
        return(
            <div>
                帖子列表：
                <li>大家一起来使用react</li>
                <li>读孙子兵法</li>
                <li>看等离子电视</li>
            </div>
        );
    }
}

export default PostList;