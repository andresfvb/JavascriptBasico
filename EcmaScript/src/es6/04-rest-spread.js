//Arrays destructure

let fruits = ['Aplle', 'Banana'];

let [a, b] = fruits;
console.log(a, b);
console.log(a, fruits[1]);

//object

let user = {username: 'Andres', age: '25'};
let {username,age}= user;
console.log(username, user.age);


//spread operator

let person = {name: 'andres', age: 25};
let country ='CO';
let data = {...person, country};
console.log(data);


//rest

function sum(num, ...values){
    console.log(values);
    console.log(num + values[0]);
    return num + values[0];
}
sum(1, 1, 2, 3)

