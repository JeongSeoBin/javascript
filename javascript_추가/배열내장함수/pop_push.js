/*
    push()
    배열의 맨 마지막에 새 항목 추가

     pop()
     배열에서 마지막 요소를 추출
     배열에서 해당 요소 삭제
*/

const numbers = [1,2,3,4,5,6,7,8];

let value = numbers.pop();
console.log(value);
console.log(numbers);

numbers.push(0);
console.log(numbers);