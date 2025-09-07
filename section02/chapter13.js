function add10(num) {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof num === 'number') {
                resolve(num + 10);
            } else {
                reject("num이 숫자가 아닙니다.");
            }
        }, 2000);
    });

    return promise;
}

add10(0).then((result) => {
    console.log(result);

    return add10(result);
}).then((result) => {
    console.log(result);

    return add10(result);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


//
// const promise = new Promise((resolve, reject) => {
//     // 비동기 작업 실행하는 함수
//     // executor
//
//     // setTimeout(() => {
//     //     console.log("안녕");
//     //     resolve("안녕");
//     // }, 2000);
//
//     // setTimeout(() => {
//     //     console.log("안녕");
//     //     reject("왜 실패했는지 이유...");
//     // }, 2000);
//
//     setTimeout(() => {
//         const num = null;
//
//         if (typeof num === 'number') {
//             resolve(num + 10);
//         } else {
//             reject("num이 숫자가 아닙니다.");
//         }
//     }, 2000);
// });
//
// // then 메서드 (성공했을 때만 호출)
// promise.then((value) => {
//     console.log(value);
// });
//
// // catch 메서드 (실패했을 때만 호출)
// promise.catch((error) => {
//     console.log(error);
// });
//
// promise
//     .then((value) => {
//         console.log(value);
//     })
//     .catch((error) => {
//         console.log(error);
//     });



// setTimeout(() => {
//     console.log(promise);
// }, 3000);

