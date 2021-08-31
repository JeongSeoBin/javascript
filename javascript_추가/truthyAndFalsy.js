/*
    falsy한 값
    !undefined !null !0 !'' !NaN  => true

    5개 값 재외한 모든 값은 truthy한 값
    !3 !'hello' !['array'] ![] !{}
*/

function print(person) {
    //if(person === undefined || person === null) {
    //자바스크립트에서 undefined와 null은 falsy한 값으로 간주되어 
    //persin에 undefined나 null값이 넘어오면 조건이 true가 되므로 null check를 할 수 있다
      if(!person) {
        return;
    }
    console.log(person)
}

const person = {
    name: 'John'
}

print(person)