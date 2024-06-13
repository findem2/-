// maths 객체에/ 사칙연산 함수를 선언하고 확인하시오. 틀렸다고 했는데 뭐가 틀렸을까 ..????? 이정도면 완벽하다!
const maths = {
    PI: 3.14,
    add: function(a, b){
        return a + b
    },
    minus: function(a, b){
        return a - b
    },
    multiple: (a, b) => {
        return a * b
    },
    divide: (a, b) => {
        return a / b
    }
};

// maths.add = function(a, b) {
    
//     let add = a + b;
//     return add;
// };

// maths.minus = function(a, b) {
//     let minus = a - b;
//     return minus;
// };

// maths.multiple = function(a, b) {
//     let minus = a * b;
//     return multiple;
// };

// maths.divide = function(a, b) {
//     let divide = a / b;
//     return divide;
// };

console.log(maths.add(1, 2));
console.log(maths.minus(2, 3));
console.log(maths.multiple(3, 4));
console.log(maths.divide(4, 5)); 