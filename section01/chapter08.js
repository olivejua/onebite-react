// 1. null 병합 연산자
// -> 존재하는 값을 추려내는 기능
// -> null, undefined가 아닌 값을 찾아내는 연산자

let var1;
let var2 = 10;
let var3 = 20;

let var4 = var1 ?? var2;
let var5 = var1 ?? var3;
let var6 = var2 ?? var3; // 둘다 값이 있으면 첫번째 값 반환

let userName = "ksk";
let userNickname = "olivejua";

let displayName = userName ?? userNickname;

// 2. typeof 연산자
// -> 값의 타입을 문자열로 변환하는 기능을 하는 연산자

let var7 = 1;
var7 = "hello world";

let t1 = typeof var7;
console.log(t1);


// 3. 삼항 연산자
let var8 = 10;

let res = var8 % 2 === 0 ? "짝수" : "홀수";

