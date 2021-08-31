/*
    템플릿 리터럴
    함수형 옆에 템플릿 리터럴이 올 경우 함수 호출
    함수의 인수로 템플릿 리터럴 전달
    보간표현법(`${}`)이 있는 경우 보간표현법 앞뒤로 나누어 문자열이 배열로 전달
   보간표현법의 표현식의 값은 따로 인수에 전달
*/

function tagged(str, a, b) {
    let bigger;
    (a > b) ? bigger = 'A' : bigger = 'B';
    return str[0] + bigger + '가 더 큽니다';
}

let a = 100;
let b = 300;
let str = tagged`A와 B 둘 중 ${a}, ${b}`;
console.log(str);