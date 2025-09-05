// 5. 논리연산자
let or = true || false;
let and = true && false;
let not = !true;

console.log(or, and, not);

// 6. 비교연산자
let comp1 = 1 === 2;
let comp2 = 1 !== 2;
console.log(comp1, comp2);

let comp3 = 1 == "1"; // == 두개면 자료형까지 비교하지 않음.
let comp4 = 1 === "1";
console.log(comp3, comp4);