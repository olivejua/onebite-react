function returnFalse() {
    console.log("False 함수");
    return undefined; //falsy
}

function returnTrue() {
    console.log("True 함수");
    return 10; // truthy
}

// console.log(returnFalse() && returnTrue());

function printName(person) {
    let name = person && person.name;
    console.log(name || "person의 값이 없음");
}

printName({name: "이정환"});