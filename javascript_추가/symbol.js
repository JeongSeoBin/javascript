/*
    심볼
    내장 속성 이름과 충돌나지 않게 새로운 속성을 추가하기 위함
    => 객체 내장 속성과 같은 이름의 속성을 추가하면 내장 속성이 덮어 씌워져 더 이상 사용할 수 없게 된다

    객체에 심볼로 추가한 속성은 for..in 반복문에 나타나지 않는다

    심볼 생성
    Symbol(description)
    * description은 심볼을 구분해내지 못한다
    심볼은 함수 호출 시 매번 새로운 심볼을 생성한다
    따라서 Symbol('foo') == Symbol('foo') (x)
*/

//내장 속성과 같은 이름의 속성 추가 시 내장 속성을 덮어 쓴다
let arr = [1, 2, 3];
console.log(arr.length);//3
arr.length = 100;
console.log(arr.length);//100

//심볼을 이용하여 내장 속성과 새로운 속성과의 충돌 해결
let arr2 = [1, 2, 3];
const length = Symbol('length');
arr2[length] = 100;
console.log(arr2[length]);//100
console.log(arr2.length);//3

//for..in에서 배열에 인덱스 외 추가된 속성도 출력된다
arr.prop = 100;
for (let i in arr) {
    console.log(i);//0 1 2 prop
}

//for...in에서 심볼은 출력되지 않는다
let prop = Symbol('prop');
arr2[prop] = 100;
for (let i in arr2) {
    console.log(i)//0 1 2
}