// 절.대. 검색하지 말 것
// 모르겠으면 플로우 차트라도 만들어올 것
// 각 1시간씩

// 1. 구구단 기준으로 4단 출력
// for(let i = 0; i < 9; i++){
//     for(let a = 0; a < 5; a++){
//         console.log(4 * (a + 1) ((i+1)*4))
//     }
// }


for(let i = 0; i < 9; i++){
    // const a = 4s
    console.log(4,'x',(i+1),'=',((i+1)*4));
}
// 중간에 스트링을 넣는 법을 까먹음..

// 2. 더하기 함수 선언
function add(a, b){
    return a + b;
}

const add1 = (a, b) =>{
    return a + b;
}
// 3. 손민복에 대한 이름, 나이, 성별, 취미목록을 포함하는 객체 초기화
info = {
    name: "손민복",
    age: 27,
    sex: "male",
    hobbyList: ["movie", "game"]
};

 
// 4. AWS반 학생들에 대한 이름, 성별을 포함하는 객체를 가진 배열 초기화
let classAWS = [
    {
        name: "손민복",
        sex: "male" 
    },
    {
        name: "이정배",
        sex: "male" 
    },
    {
        name: "이승배",
        sex: "male" 
    },
    {
        name: "김강문",
        sex: "male" 
    },
    {
        name: "박성민",
        sex: "male" 
    },
    {
        name: "이동찬",
        sex: "male" 
    },
    {
        name: "방지완",
        sex: "male" 
    },
];
// 5. 4번 문제에서 만든 AWS반 학생들에 대한 객체들에 자기 소개를 하는 메서드를 추가
//    - 메서드 호출 시 "안녕하세요 저는 손민복입니다."를 출력
// 기존에 있는 거에 추가를 해야함 추가가 기억이 하나도 안남 ..
// 기존에 있는 배열안 객체들에게 메서드를 추가해서 객체를 부를때 내가 원하는 메서드가 나오게 해야함
// 4번 문제안에 객체를 찾는다
// - 그속에 배열들을 찾는다
// - 배열의 내용을 바꾼다.
// - 원하는 위치의 객체를 호출한다.
// 내가 원하는 내용이 잘나오는게 확인한다.
// console.log(classAWS[1].name);
for(let i = 0; i < 7; i++){
    classAWS[i].introduce = function(){
    console.log("안녕하세요 저는 ", classAWS[i].name, "입니다.");
};
}
classAWS[0].introduce();
// classAWS[1].introduce = function(){
//     console.log("안녕하세요 저는 ", classAWS[1].name, "입니다.");
// };
// classAWS[1].introduce();