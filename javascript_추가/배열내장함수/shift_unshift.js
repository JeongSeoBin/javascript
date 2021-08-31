/*
    unshift()
    배열의 맨 앞에 새 항목 추가

    shift()
    배열에서 첫번째 요소를 추출
    배열에서 해당 요소 삭제
*/

const numbers = [1,2,3,4,5,6,7,8];

let value = numbers.shift();
console.log(value);
console.log(numbers);

numbers.unshift(0);
console.log(numbers);