// 너에대한 정보를 가지고 있는 person이라는 객체를 초기화 하시오
const person = {
    name : "민복",
    age : 29,
    height : 188,
    hands : 2,
    legs : 2,
    eyes : 2,
    fingers : 10
};

// 만약에 person의 나이가 30이하면 이름을 출력해라
// if ( person_age <= 30 ) {
//     console.log(name);
// }

// 만약에 Num이 10보다 크면 2로 나누고/ 20보다 크면 3으로 나누고 아니면 100으로 나머지 계산을 한다
if (num > 10) {
    num /= 2;
}else if(num > 20) {
    num /= 3;
}else{
    num %= 100;
}

let students;
// students변수에 aws반에 학생들의 이름을 담은 배열을 할당하시오
students = [ "김강문", "이정배", "이승배", "손민복", "박성민", "방지완", "이동찬" ];
