/*
    splice()
    배열에서 특정 항목을 제거할때 사용
    첫번째 파라미터에는 어떤 인덱스부터 지울지를 의미하고 두번째 파라미터는 그 인덱스부터 몇개를 지울지를 의미
    기존 배열에서 특정 부분을 splice하여 기존 배열도 변경이 일어남
*/

const numbers = [1,2,3,4,5,6,7,8,9,10];
const index3 = numbers.indexOf(3);
const spliced = numbers.splice(index3,3);

console.log(spliced); //[3,4,5]
console.log(numbers); //[1,2,6,7,8,9,10]