/*
    slice()
    배열에서 특정 부분을 추출하는데 사용
    첫번째 파라미터는 어디서부터 자를지를 결정, 두번째 파라미터는 몇개를 자를 지 결정한다
    기존의 배열은 변경되지 않음
*/

const numbers = [1,2,3,4,5,6,7,8,9];
const sliced = numbers.slice(1,3);

console.log(sliced); //[2m3]
console.log(numbers); //[1,2,3,4,5,6,7,8,9]q