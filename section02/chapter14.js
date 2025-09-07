// async
// 어떤 함수를 비동기 함수로 만들어주는 키워드
// 함수가 프로미스를 반환하도록 변환해주는 키워드

async function getData() {
    // return {
    //     name: "이정환",
    //     id: "winterlood",
    // };

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: "John Doe",
                id: "John",
            }, 1500);
        });
    });
}

// console.log(getData());

// await
// async 함수 내부에서만 사용이 가능한 키워드
// 비동기 함수가 다 처리되기를 기다리는 역할

async function printData() {
    const data = await getData();
    console.log(data);
}

printData();



//주문
// 주문요청을 수락한다. (0.2초 걸림)
// 조리를 한다 (2초걸림)
// 조리한 음식을 배달 시작한다. (3초걸림)
// 배달 후 주문을 완료한다.
// 알림을 보내준다.

// 결과에 관련이 있는 작업과 없는 작업을 구분해야함

async function execute1() {
    const aResult = await taskA();
    await taskB(aResult);
    await taskC();
    await taskD();
}



