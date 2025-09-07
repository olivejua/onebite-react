// function add(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 3000);
// }
//
// add(1, 2, (value) => {
//     console.log(value);
// });
//

// 음식을 주문하는 상황
function orderFood(callback) {
    setTimeout(() => {
        const food = "떡볶이";
        callback(food);
    }, 3000);
}

function cooldownFood(food, callback) {
    setTimeout(() => {
        const cooledDownFood = `식은 ${food}`;
        callback(cooledDownFood);
    }, 2000);
}

function freezeFood(food, callback) {
    setTimeout(() => {
        const frozenFood = `냉동된 ${food}`;
        callback(frozenFood);
    }, 1500);
}

orderFood((food) => {
    console.log(food);

    cooldownFood(food, (cooledDownFood) => {
        console.log(cooledDownFood)

        freezeFood(cooledDownFood, (frozenFood) => {
            console.log(frozenFood);
        })
    });
});
