/*
    Map
    kay, value, 항목으로 이루어진 컬렉션이다.

    # 객체와 맵의 차이
    - 항목의 수
    객체는 추가된 항목의 수를 정확히 알기 어렵지만 맵은 size 내장 속성으로 추가된 항목의 수를 알 수 있다
    map.size

    - key 타입
    객체의 속서의 key는 문자열 또는 Symbol만 가능하지만 맵의 항목의 key는 모든 값이 될 수 있다

    - 속성 추가/불러오기
    객체
    obj [key]
    obj.key
    맵
    map.set(key,vlaue)
    map.get(key)

    - 이터러블 규약
    객체는 리터러블 규약을 따르지 않지만 맵은 리터러블 규역을 따른다
    따라서 맵은 for...of문으로 순회가 가능하다

    # 맵 메서드
    set(key,value)
    get(key)
    clear()
    delete(key)
    entries(): 맵의 항목을 열거. 이터렉터 객체 반환
    forEach(callback)
    has(key)
    keys(): 맵 항목의 전체의 key를 열거가능한 이터렉터 객체를 반환
    values(): 맵 황목의 전체 value를 열거가능한 이터렉터 객체를 반환
    [@@iterator](): entires()와 동일


    WeakMap
    맵과 동일하지만 맵 항목 key는 참조타입만 허용
    이는 위크맵의 모든 항목이 삭제되었을 때 가비지 컬렉션의 수거대상이 되도록 하기 위해서이다
    위크맵의 항목 key는 열거되거 나 조회할 수 없다
    즉 열거관련 메서드나 항목 수 조회 속성이 존재하지 않는다
*/

//set()호출 뒤에 맵 인스턴스를 반환하기 때문에 가능
let map = new Map();
map.set('a', 100).set('b', 200);

//entires()
let mapIter = map.entries();
mapIter.next();//{value: {'a':100, done:false}}
mapIter.next();//{value: {'b':200, done:false}}
mapIter.next();//{value:undefined, done:true}

//[@@iterator]()
mapIter = map[Symbol.iterator]();
mapIter.next()
mapIter.next()
mapIter.next()

//forEach(callback)
map.forEach(function (value, key) {
    console.log(value, key);
})


//weakMap
let obj = {}
let weakMap = new WeakMap();
weakMap.set(obj, 100);
console.log(weakMap.get(obj));