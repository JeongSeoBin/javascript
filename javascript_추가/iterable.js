/*
    # 이터러블 규약
    for...of문을 살행하여 번복돨때 (iteration) 값이 열거(enumerable)되며 내부적으로 iterator메서드(Symbol.iterator())가 구현되어 있어야 하는 규약
    array, String, Map, Set, 함수의 arguments 객체(Iterable Object)등이 이 규약을 따릅니다
*/

//Sting iteration
let str = '가나다';
for (let value of str) {
    console.log(value);
}

//Array iteration
let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value);
}

//Iterable Object에 내장된 iterator메소드
let str = '가나다';
let iterator = str[Symbol.iterator]();

//iterator 메소드 직접 구현하기
let iterable = {
    [Symbol.iterator]: function () {

    }
}