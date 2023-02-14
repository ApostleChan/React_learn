// PostItem.js
import React, {Component} from "react";
import PropTypes from "prop-types";
import "./PostItem.css";
import like from "./image/like-react.png"; // 图标作为模块被导入


class PostItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editing: false, // 帖子是否是否处于编辑状态
            post: props.post
        };
    }

    componentWillReceiveProps(nextProps) {
        // 父组件更新post后，更新PostItem的state
        if (this.props.post !== nextProps.post) {
            this.setState({
                post: nextProps.post
            });
        }
    }


    // 处理点赞事件
    handleClick = (event) => {
        this.props.onVote(this.props.post.id);
    }

    // 保存/编辑按钮点击后的逻辑
    handleEditPost = (event) => {
        const editing = this.state.editing;
        // 当前处于编辑态，调用父组件传递的onSave方法保存帖子
        if (editing) {
            this.props.onSave({
                ...this.state.post,
                date: this.getFormatDate(),
            })
        }
    }

    // 处理标题textarea值的变化
    handleTitleChange = (event) => {
        const newPost = {...this.state.post, title: event.target.value};
        this.setState({
            post: newPost
        });
    }

    getFormatDate() {
        //
    }


    render() {
        return (
            <li className='item'>
                <div className='title'>
                    {this.state.editing ? <form>
                        <textarea value={this.state.post.title} onChange={this.handleTitleChange}/>
                    </form> : this.state.post.title}
                </div>
                <div>创建人: <span>{this.state.post.author}</span></div>
                <div>创建时间: <span>{this.state.post.date}</span></div>
                <div className='like'>
                    <span><img src={like} onClick={this.handleClick}/></span>
                    <span>{this.state.post.vote}</span>
                </div>
                <div>
                    <button onClick={this.handleEditPost}>
                        {this.state.editing ? "保存" : "编辑"}
                    </button>
                </div>
            </li>
        );
    }
}

PostItem.propTypes = {
    post: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        author: PropTypes.string,
        date: PropTypes.string,
        vote: PropTypes.number
    }).isRequired,
    onVote: PropTypes.func.isRequired
}

export default PostItem;