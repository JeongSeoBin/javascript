/*
    generator
    이터러블 규약과 이터레이터 규약을 따르는 제너레이터 객체를 만들어 주는 함수
    이 두 규약을 따르는 객체는 iterator메서드와 next 메서드를 구현해줘야 하는데 이를 더 쉽게 구현하도록 하는 것
*/

//두 규약따르는 개체 직접 작성
let iterator = {
    i: 0,
    [Symbol.iterator]: function () {
        return this
    },
    next: function () {
        return (this.i < 3) ? { value: this.i++, done: false } : { value: undefined, done: true }
    }
}

for (let value of iterator) {
    console.log(value);
}

//제너레이터 함수를 사용하는 코드
//yield에서 반환하는 값이 next메서드가 반환하는 value이며 done은 false
//yield 마지막까지 진행하고 나면 {value: undefined, done:true}반환
function* gen() {
    for (let i = 0; i < 3; i++) {
        yield i;
    }
}

let generator = gen();

// for(let value of generator){
//     console.log(value);//0,1,2
// }
let iteratorResult = generator.next();
console.log(iteratorResult);//{value:0, done: false}


/*
    제너레이터 이어붙이기
    function* gen(){    
        yield* generator();
    }
 */


function* gen1(n) {
    yield n + 1;
    yield* gen2(n);
    yield n + 2;
}

function* gen2(n) {
    yield n + 100;
    yield n + 200;
}

let generator = gen1(100);
for (let value of generator) {
    console.log(value);//101, 200, 300, 102
}

/*
    제너레이터 객체 메서드
    # return
    제너레이터 객체의 열거를 종료
    {value: undefined, done:true}반환
    # throw
    제너레이터의 열거 중 강제로 오류 발생
    {value: undefined, done:true}반환
*/

//return
function* gen() {
    let i = 0;
    while (i >= 0) {
        yield i++;
    }
}

let generator = gen();
generator.next(); //{value:0, done:false}
generator.next(); //{value:1, done:false}
generator.next(); //{value:2, done:false}
generator.throw(); //throw error
generator.next(); //{value:3, done:false}
generator.return();  //{value:undefined, done:true}
generator.next(); //{value:undefined, done:true}