/*
    set
    value들로만 이루어진 컬렉션
    배열처럼 인덱스로 값을 읽어 올 수 없으며 열거를 통해서만 값을 얻을 수 있다
    중복불가

    # 셋 메서드
    add(value)
    clear()
    delete(value)
    entires(): 항목을 열거할 수 있는 이터렉터 객체 반환
               이터렉터 객체는 [value, value]형태이다
    forEach(callback): set.forEach(function(value, key) {...})형태이며 key에는 value가 할당된다
    has(value)
    keys(): value만 열거
    values(): value만 열거
    [@@iterator](): value만 열거


    WeakSet
    set과 동일하지만 위크셋의 value는 참조 타입만 가능하다
    위크셋의 항목 value는 열거되거 나 조회할 수 없다
    즉 열거관련 메서드나 항목 수 조회 속성이 존재하지 않는다
*/
