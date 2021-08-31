/*
    reduce()
    배열을 순회하면서 인덱스 데이터를 줄여가며 어떤 기능을 수행할 수 있다
    
    reduce((accumulator, current, index, array) => {}, initialValue)
    * callback함수
    accumulator: reduce함수의 두번째 파라미터 initialValue값이 넘어옴
                 누적 값
    current: 배열의 각 원소
    index: reduce()의 두번째 인자인 initialValue를 사용했는지 안했는지에 따라 값이 달라진다
           initialValue를 사용했다면 0부터 사용하지 않았다면 1부터 시작된다
    array: reduce()가 호출된 뱌열
*/

//배열 원소들의 합을 구함
const numbers = [1,2,3,4,5];
const sum = numbers.reduce((accumulator, current) => {
    accumulator+current
}, 0);

console.log(sum);


//각 과일의 수량을 구함
const fruit = ['apple', 'grape', 'banana', 'apple', 'orange', 'grape', 'apple', 'orange'];
const result = fruit.reduce((object, currentValue) => {
    if (!object[currentValue]) {
        object[currentValue] = 0;
    }
    object[currentValue]++;
    return object;
}, {});
 
console.log(result);