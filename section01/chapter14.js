// 스코프
// -> 전역 스코프 / 지역 스코프
// -> 전역 스코프 : 전체 영역에서 접근 가능
// -> 지역 스코프 : 특정 영역에서만 접근 가능

let a = 1

function funcA() {
    let b = 2;
    console.log(a);

    // 외부에서 호출 불가능. 내부에서만 가능
    // function funcB() {}
}

if (true) {
    // 외부에서 호출가능
    // function funcB() {}
}

for (let i = 0; i < 10; i++) {
    // 외부에서 호출가능
    // function funcB() {}
}

funcA();
// funcB();
