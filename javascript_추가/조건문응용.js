//인자값이 특정 값들 중 하나에 포함되는지
function isAnimal(text) {
    const animal = ['고양이', '개', '거북이']
    //return text === '고양이' || text === '개' || text ==='거북이'
    return animal.includes(text);
}

const isAnimal = (text) => ['고양이', '개', '거북이'].includes(text)

console.log(isAnimal('개'))
console.log(isAnimal('노트북'))


//인자값에 따라 다른 값을 리턴해야 될때
function getSound(animal) {
    // if(animal === '개') return '멍멍'
    // if(animal === '고양이') return '야옹'
    // if(animal === '돼지') return '꿀꿀'
    // if(animal === '비둘기') return '구구구'
    // if(animal === '참새') return '짹짹'
    // return '?'
}

function getSound(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        참새: '짹짹',
        비둘기: '구구구'
    }
    return sounds[animal] || '?'
}

console.log(getSound('개'))


//인자값에 따라 다른 코드를 수행해야 할때
function makeSound(animal) {
    const tasks = {
        개: () => {
            console.log('멍멍')
        },
        고양이: () => {
            console.log('야옹')
        },
        비둘기: () => {
            console.log('구구')
        }
    }

    if(!tasks[animal]) {
        console.log('?')
    }

    tasks[animal]()
}