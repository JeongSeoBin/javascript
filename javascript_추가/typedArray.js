/*
    타입 배열
    이진 데이터만 허용하는 배열
    파일처리, 오디오나 비디오 처리 시 유용하게 사용
    원하는 비트 선택가능

    버퍼와 뷰로 나뉘는데 버퍼는 단순히 데이터 청크를 나타내는 객체이며 스스로 읽고 쓸 수 없고 뷰를 통해서 저장된 데이터를 조작할 수 있다
    * 버퍼
    지정한 바이트 크기의 버퍼 셍성
    특 정 타입의 뷰 생성자 객체를 통해서 데이터를 읽거나 쓰기 가능
    * 뷰
    지정힌 버퍼의 바이트만큼 담을 수 있는 배열. 클래스 이름의 비트에 따라 원소 수 가 결정되고, 초기값은 0
*/

//16바이트 버퍼 생성
const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength)//16
//128비트 버퍼를 지정한 32비트 뷰에서는 원소 4개의 초기값이 0인 32비트 양의 정수형 배열생성
const view = new Uint32Array(buffer);
console.log(view);//[0,0,0,0]