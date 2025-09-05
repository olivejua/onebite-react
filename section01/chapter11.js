// 함수 선언

function greeting () {
    console.log("greeting");
}

console.log("before greeting");
greeting();
console.log("after greeting");

getArea(10, 20);

function getArea(width, height) {
    function another() { // 중첩함수
        console.log("another")
    }

    another();
    let area = width * height;

    console.log(area);
}