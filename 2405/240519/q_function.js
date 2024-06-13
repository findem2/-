// 함수의 종류에 대해서 모두 조사하시오.
선언적 함수
function myFunction() {
    console.log('This function is called named function.');
}
myFunction(); // This function is called named function.

익명 함수(대입 함수)

let greet = function(name) {
    console.log(`Hello, ${name}!`);
}
greet('Five'); // Hello, Five!

화살표 함수
let greetWithArrow = () => console.log('Hello');
greetWithArrow(); // Hello

즉시 실행함수
(function () {
    let greeting = 'How are you doing?';
    console.log(greeting);
})(); // How are you doing?
일급 함수 - 함수 스스로 객체 취급
- 대입형 함수 - 위에 있다
- 콜백함수

let number = [1, 2, 3, 4, 5];

number.forEach(x => {
    console.log(x * 2);
}); //2
// 4
// 6
// 8
// 10

- 고차함수
let arr = [10, 20, 30];
let twiced = arr.map((element) => element * 2);
console.log(twiced); // [20, 40, 60]

생성자 함수
function Person(name, place) {
    this.name = name;
    this.place = place;
}
let user1 = new Person('Five', 'Heaven');
let user2 = new Person('Ten', 'Hell');
console.log(`Hello everyone, this is ${user1.name}, and I am from ${user1.place}.`);
console.log(`Hello everyone, this is ${user2.name}, and I am from ${user2.place}.`);
// Hello everyone, this is Five, and I am from Heaven.
// Hello everyone, this is Ten, and I am from Hell.

// 함수를 나타내는 언어에 대해서 모두 조사하시오.
// 객체에 들어갔을때 메서드
const person = {
    name: 'Alice',
    age: 25,
    greet: function() {
        return `Hello, my name is ${this.name}`;
    }
};

console.log(person.greet());  // Hello, my name is Alice