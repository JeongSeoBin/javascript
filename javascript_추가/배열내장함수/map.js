/*
    map()
    배열안의 각 원소를 변환할때 사용
    새로은 배열 생성
*/

//배열 안의 각 원소를 변환
const arr = [1,2,3,4,5,6,7,8];
const newArr = arr.map(item => item*item);

console.log(newArr);


//배열 안의 각 원소의 일부 추출
const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'world'
    }
];

const texts = items.map(item => item.text);

console.log(texts);