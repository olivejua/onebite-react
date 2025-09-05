// 1. 상수 객체
const animal = {
    type: "고양이",
    name: "나비",
    color: "black",
};

// 객체자체를 변경할 수는 없지만 프로퍼티는 추가/수정/삭제가 가능
animal.age = 2;
animal.name = "까망이";
delete animal.color;

console.log(animal);

// 2. 메서드
// -> 값이 함수인 프로퍼티를 말함

const person = {
    name: "이정환",
    // 메서드 선언
    sayHi() {
        console.log("안녕!");
    },
};

person.sayHi();
person["sayHi"]();
