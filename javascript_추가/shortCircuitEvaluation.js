/*
    단축 평가 논리 계산법
    &&
    특정 값이 유효할때만 특정 값을 조회하는 상항에 사용
    true && 'hello'  => hello
    false && 'hello' => false
    'hello' && 'bye' => bye
    null && 'hello' => null
    undefined && hello => undefined
    '' && hello => ''
    0 && hello => 0
    1 && hello => hello
    1 && 1 => 1

    ||
    어떤 값이 falsy할때 대체로 사용할 값을 지정해줄때 유용
    false || hello => hello
    '' || '이름이 없다' => 이름이 없다
    null || null이다 => null이다
    undefined || define되지 않았다 => define되지 않았다
    0 || 0다 => 0다
    1 || 여기 안본다 => 1
    true || 여기 안본다 => true
    와아 || 여기 안본다 => 와아
    [] || 여기 안본다 => []
*/

//&&
const dog = {
    name: '멍멍이'
}

function getName(animal) {
    // if(animal) {
    //     return animal.name
    // }
    // return undefined

    return animal && animal.name
}

const name = getName(dog);
console.log(name);

//||
const namelessDog = {
    name: ''
}

function getName(animal) {
    const name = animal && animal.name
    // if(!name) {
    //     return '이름이 없는 동물입니다'
    // }
    // return name;
    return name || '이름이 없는 동물입니다'
}

const name = getName(namelessDog)
console.log(name)

