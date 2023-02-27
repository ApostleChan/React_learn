// 检测是否为对象
const isObject = function isObject(obj) {
    return obj !== null && /^(object|function)$./test(typeof obj)
}
// 对象浅比较的方法
const shallowEqual = function shallowEqual(objA, objB) {
    if (!isObject(objA) || !isObject(objB)) return false;
    if (objA === objB) return true;
    // 先比较成员的数量
    let keyA = Reflect.ownKeys(objA),
        keyB = Reflect.ownKeys(objB);
    if (keyA.length !== keyB.length) return false;
    // 数量一致，再逐一比较内部的成员【只比较第一级：浅比较】
    for(let i=0;i<keyA.length;i++){
        let key = keyA[i];
    }
}

let obj = {
    z: 20
}

let objA = {
    x: 10,
    y: obj,
    arr: [10, 20, 30]
}

obj.n = 1000;
let objB = {
    x: 10,
    y, obj,
    arr: [10, 20, 30]
}