// math 모듈

export function add(a, b) {
    return a + b;
}

export function sub(a, b) {
    return a - b;
}

// commonJS
// module.exports = {
//     add,
//     sub,
// };

// ES module
// export { add, sub };


export default function multiply(a, b) {
    return a * b;
}