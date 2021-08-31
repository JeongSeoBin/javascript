/*
    # iterator 규약
    iterable 구약 과 마찬가지로 값이 열거되지만 NEXT메서드를 통해 하나씩 순차적으로 열거되어야 하는 규약입니다.
    이때 열거되는 값은 객체이며 VALUE와 DONE속성을 갖습니다. ValUE은 실제 값임ㅕ done은 열거의 끝임을 뜻합니다
*/

//array iterator
let arr = [1, 2, 3];
//내장됨 iterator 메서드를 호출하여 이터레이터 객체를 전달받음
let iterator = arr[Symbol.iterator]();
iterator.next(); //{value:1, done:fasle}
iterator.next(); //{value:1, done:fasle}
iterator.next(); //{value:1, done:fasle}
iterator.next(); //{value:undefined, done:true}

//이터레이터 직접 구현하기
let iterator = {
    i: 1,
    next: function () {
        return (this.i < 4) ? { value: this.i++, done: false } : { vaule: undefined, done: true }
    }
}

iterator.next();
iterator.next();
iterator.next();
iterator.next();
