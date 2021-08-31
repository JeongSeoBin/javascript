//객체 rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
}

const {color, ...cuteSlime} = purpleCuteSlime;
console.log(cuteSlime);//{ name: '슬라임', attribute: 'cute' }

const {attribute, ...slime} = cuteSlime;
console.log(slime);//{ name: '슬라임' }


//배열에서 rest
const numbers = [0,1,2,3,4,5,6];
const [one, ...numbers];
console.log(numbers);//[1,2,3,4,6]


//함수 파라마터에서 rest
//함수로 넘어 온 값들을 배열로 받는다
function sum(a,b,c,d,e,f,g) {
    return a+b+c+d+e+f+g;
}
function sum(...rest) {
    return rest.reduce((acc, cur) => asc = cur, 0)
}

console.log(1,2,3,4,5,6)