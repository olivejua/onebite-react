console.log(1);

// 비동기 작업들은 자바스크립트가 아닌  Web APIs 라는 브라우저가 관리하는 별도의 공간에서 실행됨
setTimeout(() => {
    console.log(2);
}, 3000);

console.log(3);


