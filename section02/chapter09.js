// 5가지 배열 변형 메서드
// 1. filter

let arr1 = [
    {name: "이정환", hobby: "테니스"},
    {name: "김효빈", hobby: "테니스"},
    {name: "홍길동", hobby: "독서"},
];

const tennisPeople = arr1.filter(item => item.hobby === "테니스");



let arr3 = [10, 3, 5];
arr3.sort((a, b) => {
    if (a > b) {
        return 1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
});

console.log(arr3);


// 4. toSorted (최신함수)
// 정렬된 새로운 메서드를 반환하는 메서드
let arr4 = ["b", "a", "c"];
const sorted = arr5.toSorted();
console.log(arr4);
console.log(sorted);
