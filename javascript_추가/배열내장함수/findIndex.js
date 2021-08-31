/*
    findIndex()
    배열 안의 요소가 객체이거나 배열일때 해당 요소의 배열 안에서의 위치를 찾는 함수
*/

const todos = [
    {
        id: 1,
        text: '자바스크립트',
        done: true
    },
    {
        id: 2,
        text: '리액트',
        done: true
    },
    {
        id:3,
        text: 'node.js',
        done: false
    }
];

const index = todos.findIndex(todo => todo.id == 2);

console.log(index);