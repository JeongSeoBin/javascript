/*
    find()
    배열에서 특정 원소를 찾고 반환하는 함수
*/

const todos = [
    {
        id:1,
        text: '밥먹기'
    },
    {
        id:2,
        text: '운동하기',
    },
    {
        id:3,
        text: '공부하기'
    }
];

const todo = todos.find(todo => todo.id == 3)
console.log(todo);