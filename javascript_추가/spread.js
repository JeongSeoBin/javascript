//spread
const slime = {
    name: '슬라임'
}

// const cuteSlime = {
//     name: '슬라임',
//     attribute: 'cute'
// }
const cuteSlime = {
    ...slime,
    attribute: 'cute'
}

// const purpleCuteSlime = {
//     name: '슬라임',
//     attribute: 'cute',
//     color: 'purple'
// }
const purpleCuteSlime = {
    ...slime.cuteSlime,
    color: 'purple'
}

//color값을 green으로 덮어씀
const greenCuteSlime = {
    ...purpleCuteSlime,
    color: 'green'
}
//color값을 purple로 덮어씀
const greenCuteSlime = {
    color: 'green',
    ...purpleCuteSlime,
}


//배열 spread
const animals = ['개', '고양이'];
const anotherAnimals = [...animal, '비둘기'];


//여러 spread
const numbers = [1,2,3,4,5];
const spreadNumbers = [...numbers, 1000, numbers];//1,2,3,4,5,1000,1,2,3,4,5


//함수 spread
//인자로 넘기는 값들을 배열로 묶고 spread를 통해 넘길 수 있다
function subtract(x, y) {
    return x-y;
}

const numbers = [1,2]
const result = subtract(...numbers);
console.log(result);


