/*
    filter()
    배열에서 특정 조건을 만족하는 값들로만 따로 추출하여 새로운 배열을 만든다
*/

 const todos = [
     {
         id: 1,
         text: '공부하기',
         done: true
     },
     {
         id: 2,
         text: '운동하기',
         done: false
     },
     {
         id: 3,
         text: '밥먹기',
         done: false
     }
 ];

 const doneTodos = todos.filter(todo => todo.done == true);

 console.log(doneTodos);