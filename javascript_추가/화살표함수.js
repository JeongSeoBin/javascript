const add = (a,b) => {
    return a+b;
}

//함수 내부에서 바로 리턴할때
const add2 = (a,b) => a+b

//defualt 파라미터
const calculataCircleArea = (r=1) => {
    return Math.PI*r*r;
}

const sum = add2(1,2)
console.log(sum);