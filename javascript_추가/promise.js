/*
    promise
    지연함수 또는 비동기 연산을 내부에서 처리 후 이행여부에 따라 결과 또는 실패원인만을 전달하고 메서드 체인 형태로 처리

    let Promise = new Promise(function(resolve, reject){
         //지연함수 또는 비동기 연산
        //resolve() 또는 reject() 호출
    })
    
    //resolve()호출 시
    promise.then(function(value, reason){...})
    //reject() 호출 시
    promise.catch(function(reason){...})


    promise 메서드
    - Promise.all(iterable)
      한번에 여러 Promise 생성자의 이행 결과를 모아 전달
      * iterable
      여러 Promise 생성자를 항목으로 하며 열거순으로 Promise의 이행결과를 모두 배열에 담아 전달
      이때 하나라도 이행거부되면 중지하고 이행거부 이유를 전달
    - Promise.race(iterable)
      여러 Primise생성자를 결합하여 가장 빠른 Promise 생성자의 이행결과를 전달
      *iterable
      여러 Promise생성자를 항목으로 하며 그 중 가장 빨리 이행결정된 결과만 전달
      이때 하나라도 이행거부되면 중지하고 이행거부이유를 전달
*/

let cnt = 0;

let promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        cnt++;
        //resolve(cnt);
        //reject('failed');
    });
});

promise.then(function ($cnt) {
    cnt = $cnt;
    console.log(cnt);
});

promise.catch(function (reason) {
    console.log(reason);
})


//Promise.all(iterable)
let p1 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('pl fulfilled');
    }, 2000)
});

let p2 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('p2 filfilled');
    }, 1000);
})

let iterable = [p1, p2];
Promise.all(iterable).then(function (value) {
    //여러 Promise의 이행 시간과 관계없이 이터러블 객체의 열거 순에 따라 결과값이 배열로 전달받음
    console.log(value);//['p1 fulfilled', 'p2 fulfilled']
}, function (reason) {
    console.log(reason)
})


//Promise.race(iterable)
let p3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('p3 fulfilled');
    }, 2000)
});

let p4 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('p4 fulfilled')
    }, 1000)
})

let iterable2 = [p3, p4];

Promise.race(iterable2).then(function (value) {
    //여러 Promise의 열거 순서와 관계없이 이행시간이 가장 빠른 이행결과를 전달받음
    console.log(value);//['P4 fulfilled']
}, function (reason) {
    console.log(reason)
})