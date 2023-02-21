import PropTypes from 'prop-types';
import React from "react";

const DemoOne = function DemoOne(props) {

    let {className, style, title, x, children} = props;
    let y = props.y;
    y = 1000;
    console.log(children);
    children = React.Children.toArray(children);
    let headerSlot = [],
        footerSlot = [],
        defaultSlot = [];
    children.forEach(child => {
        // 传递进来的插槽信息，都是编译为virtualDOM后传递进来的[而不是传递的便签]
        let {slot} = child.props;
        if (slot === 'header') {
            headerSlot.push(child);
        } else if (slot === 'footer') {
            footerSlot.push(child);
        } else {
            defaultSlot.push(child);
        }
    });

    return <div className={`demo-box ${className}`} style={style}>
        <h2>{title}</h2>
        我是DEMO-ONE{x}{y}
        <br/>
        {children}
    </div>;
};

/*通过把函数当做对象，设置静态的私有属性方法，【把函数当做对象】，用来给其设置属性的规则*/
DemoOne.defaultProps = {
    x: 0
}
DemoOne.propTypes = {
    title: PropTypes.string.isRequired,
    x: PropTypes.number,
}

let obj = {
    x: 10,
    y: 20
};
obj.x = 200;
obj.y = 300;
//Object.freeze(obj);
Object.seal(obj);
// delete obj.y
console.log(Object.isSealed(obj));

export default DemoOne;