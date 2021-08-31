//computed property
let name = "name";
let a = "age";

const user = {
    [name]: "Mike",
    [a]: 30,
    [1+4]: 5
};

console.log(user); //{ '5': 5, name: 'Mike', age: 30 }


//객체 만드는 함수
function makeObj(key, val) {
    return {
        [key]: val
    }
}

const obj = makeObj("성별", "male");


//assign
const user2 = user; 
user2.name = "Tom";

console.log(user);//{ '5': 5, name: 'Tom', age: 30 }
console.log(user2);//{ '5': 5, name: 'Tom', age: 30 }

const user3 = Object.assign({}, user);
user3.name = "Herry";

console.log(user);//{ '5': 5, name: 'Tom', age: 30 }
console.log(user3);//{ '5': 5, name: 'Herry', age: 30 }

//keys()
let res = Object.keys(user);
console.log(res);//[ '5', 'name', 'age' ]

//values()
res = Object.values(user);
console.log(res);//[ 5, 'Tom', 30 ]

//entries()
res = Object.entries(user);
console.log(res);//[ [ '5', 5 ], [ 'name', 'Tom' ], [ 'age', 30 ] ]

//fromEntries()
let arr = [
    ['mon','월'],
    ['tue','화']
]

res = Object.fromEntries(arr);
console.log(res);//{ mon: '월', tue: '화' }




