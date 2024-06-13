// 사칙연산에 대한 함수를 선언하시오.
function oscar(plus = "+", minus = "-", multiful = "*", divide="/"){
    console.log(oscar)
};

const add = (a, b) => a + b;


// 인자에 대해서 홀수인지 짝수인지 반환하는 함수를 선언하시오.

let i = 4
if( i % 2  == 0){
    console.log("짝수")
}else if( i % 3 != 0){
    console.log("홀수")
}

function odd(num) {
    if (num % 2  == 0) {
        return "짝수";
    } else {
        return "홀수";
    }
}

odd(123);