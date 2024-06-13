// AWS 반의 학생 목록을 정리하고 HTML의 list에 출력하시오.
//    - HTML 파일 수정 금지
// 번호. 이름 - 성별 / 나이 / 전화번호

// document.getElementById("list").innerText
// =
// function(){
// for(let i = 0; i < 7; i++){
// [[i+"손민복 - 남 / 29 / 010-4923-6787"],
// [i+"이동찬 - 남 / 29 / 010-2030-4394"],
// [i+"방지완 - 남 / 29 / 010-4458-6252"],
// [i+"이승배 - 남 / 25 / 010-8810-9457"],
// [i+"이정배 - 남 / 23 / 010-7143-9457"],
// [i+"김강문 - 남 / 27 / 010-9160-9462"],
// [i+"박성민 - 남 / 34 / 010-7129-7342"]]}}

// document.getElementById("list").innerHTML =
// [["손민복 - 남 / 29 / 010-4923-6787"],
// ["이동찬 - 남 / 29 / 010-2030-4394"],
// ["방지완 - 남 / 29 / 010-4458-6252"],
// ["이승배 - 남 / 25 / 010-8810-9457"],
// ["이정배 - 남 / 23 / 010-7143-9457"],
// ["김강문 - 남 / 27 / 010-9160-9462"],
// ["박성민 - 남 / 34 / 010-7129-7342"]]

// document.getElementById("list").innerHTML =
// [["<li>손민복 - 남 / 29 / 010-4923-6787</li>"]+
// ["<li>이동찬 - 남 / 29 / 010-2030-4394</li>"]+
// ["<li>방지완 - 남 / 29 / 010-4458-6252</li>"]+
// ["<li>이승배 - 남 / 25 / 010-8810-9457</li>"]+
// ["<li>이정배 - 남 / 23 / 010-7143-9457</li>"]+
// ["<li>김강문 - 남 / 27 / 010-9160-9462</li>"]+
// ["<li>박성민 - 남 / 34 / 010-7129-7342</li>"]]

// document.getElementById("list").innerHTML =
// [
//     "<li>"+{
//         name: "손민복",
//         sex: "남",
//         age: 29,
//         phoneNum: "010-4923-6787"
//     }+"</li>"+"<li>"+
//     {
//         name: "동찬",
//         sex: "남",
//         age: 29,
//         phoneNum: "010-2030-4394"
//     }+"</li>"+"<li>"+
//     {
//         name: "방지완",
//         sex: "남",
//         age: 29,
//         phoneNum: "010-4458-6252"
//     }+"</li>"+"<li>"+
//     {
//         name: "이승배",
//         sex: "남",
//         age: 25,
//         phoneNum: "010-8810-9457"
//     }+"</li>"+"<li>"+
//     {
//         name: "이정배",
//         sex: "남",
//         age: 23,
//         phoneNum: "010-7143-9457"
//     }+"</li>"+"<li>"+
//     {
//         name: "김강문",
//         sex: "남",
//         age: 27,
//         phoneNum: "010-9160-9462"
//     }+"</li>"+"<li>"+
//     {
//         name: "박성민",
//         sex: "남",
//         age: 34,
//         phoneNum: "010-7129-7342"
//     }+"</li>"
// ];


// document.getElementById("list").innerHTML =
// `[
//     <li>${{
//         name: "손민복",
//         sex: "남",
//         age: 29,
//         phoneNum: "010-4923-6787"
//     }}</li><li>
//     ${{
//         name: "동찬",
//         sex: "남",
//         age: 29,
//         phoneNum: "010-2030-4394"
//     }}</li><li>
//     ${{
//         name: "방지완",
//         sex: "남",
//         age: 29,
//         phoneNum: "010-4458-6252"
//     }}</li><li>
//     ${{
//         name: "이승배",
//         sex: "남",
//         age: 25,
//         phoneNum: "010-8810-9457"
//     }}</li><li>
//     ${{
//         name: "이정배",
//         sex: "남",
//         age: 23,
//         phoneNum: "010-7143-9457"
//     }}</li><li>
//     ${{
//         name: "김강문",
//         sex: "남",
//         age: 27,
//         phoneNum: "010-9160-9462"
//     }}</li><li>
//     ${{
//         name: "박성민",
//         sex: "남",
//         age: 34,
//         phoneNum: "010-7129-7342"
//     }}</li>
// ]`

const listElem = document.getElementById("list");

const classAWS = [
    {
        name: "손민복",
        sex: "남",
        age: 29,
        phoneNum: "010-4923-6787"
    },
    {
        name: "이동찬",
        sex: "남",
        age: 29,
        phoneNum: "010-2030-4394"
    },
    {
        name: "방지완",
        sex: "남",
        age: 29,
        phoneNum: "010-4458-6252"
    },
    {
        name: "이승배",
        sex: "남",
        age: 25,
        phoneNum: "010-8810-9457"
    },
    {
        name: "이정배",
        sex: "남",
        age: 23,
        phoneNum: "010-7143-9457"
    },
    {
        name: "김강문",
        sex: "남",
        age: 27,
        phoneNum: "010-9160-9462"
    },
    {
        name: "박성민",
        sex: "남",
        age: 34,
        phoneNum: "010-7129-7342"
    }
];

for(let i = 0; i < 7; i++){
    // classAWS[i].introduce = function(){
    // console.log(classAWS[i].name+"-"+classAWS[i].sex+"/"+classAWS[i].age+"/"+classAWS[i].phoneNum)
    // }
    listElem.innerHTML += 
`<li>${classAWS[i].name+"-"+classAWS[i].sex+"/"+classAWS[i].age+"/"+classAWS[i].phoneNum}</li>`
};
// classAWS[0].introduce();


// for(let i = 0; i < 9; i++){
//     console.log(4 + "*" + (i+1) + "=" + (4*(i+1)));
// }



// let classAWS = [
//     {
//         name: "발",
//         age: 1    
//     },
//     {
//         name: "손",
//         age: 2
//     },
//     {
//         name: "다리",
//         age: 3
//     }
// ]

// for(let x = 0; x < 3; x++){

//     console.log("나는"+classAWS[x].name+"이야")
// }

// console.log(classAWS[0])