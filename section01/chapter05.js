// 1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2)
console.log(num1 - num2)
console.log(num1 * num2)
console.log(num1 / num2)
console.log(num1 % num2)

// 양의 무한대
let inf = Infinity;
// 음의 무한대
let mInf = -Infinity

// 수치연산에 실패헸을 때 결과값 (수치연산이 실패했을 때에도 프로그래밍이 종료되지 않음)
let nan = NaN;

console.log(1 * "hello")


// 2. String Type
let myName = "MyName" // 쌍따옴표안붙이면 변수명으로 인식
let myLocation = "목동"
let introduce = myName + myLocation;

console.log(introduce)

let introduceText = `${myName} is ${myLocation}`;
console.log(introduceText);


// 3. Boolean Type
let isSwitchOn = true;
let isEmpty = false;


// 4. Null Type (아무것도 없다)
let empty = null;


// 5. Undefined Type
let none;