// 1. 함수 표현식

//선언식 함수. 호이스팅 가능
function funcA() {
    // console.log("funcA Call");
}

let varA = funcA;
// console.log(varA);
varA();

//값으로써 생성됨. 이런 경우에는 호이스팅이 되지 않음.
let varB = function funcB() {
    // console.log("funcB Call");
}
varB();

// funcB(); // 바로 함수로 담아버리면 바로 호출 못함

// 이름 생략 가능. 익명함수라고 함
let varB2 = function () {
    // console.log("funcB Call");
};

// 2. 화살표 함수
let varC = (value) => {
    console.log(value);
    return value + 1;
};

console.log(varC(10));