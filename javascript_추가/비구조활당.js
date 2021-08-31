//객체 비구조할당 
//default값 지정 가능
const object = {
    a: 1,
    b: 2
}

const {a, b=2} = object;


//함수 파라미터 내에서 비구조 할당
function print({a, b=2}) {
    console.log(a)
    console.log(b)
}
print(object);


//비구조 할당 시 이름을 변경하고 싶을때
//원본은 변경되지 않음
const animal = {
    name: '멍멍이',
    type: '개'
}

//const nickname = animal.name;
const {name: nickname} = animal

console.log(nickname);


//배열 비구조 할당
const arr = [1,2];
const [one, two=2] = arr;


//deepObject 비구조 할당
const deepObject = {
    state: {
        info: {
            name: 'seobin',
            language: ['korea', 'english']
        }
    },
    value: 5
}
// const {name, language: [first, second]} = deepObject.state.info;
// const {value} = deepObject;

// const extracted = {
//     name,
//     first, second,
//     value
// }

const {
    state: {
        info: {
            name, language: [first, second]
        }
    },
    value
} = deepObject

const extracted = {
    name,
    first, second,
    value
}

console.log(extracted);
