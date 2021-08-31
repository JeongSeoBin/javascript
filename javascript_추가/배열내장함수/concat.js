/*
    concat()
    여러 게의 배열을 하나로 합친다
    기존의 배열은 건드리지 않음
*/

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2);
console.log(concated);
console.log(arr1);
console.log(arr2);