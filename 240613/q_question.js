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

const listElem = document.getElementById("list");
for(let i = 0; i < 7; i++){
    listElem.innerHTML += 
`<li>${classAWS[i].name} - ${classAWS[i].sex} / ${classAWS[i].age} / ${classAWS[i].phoneNum}</li>`
};

// 위 내용을 table 표로 출력하시오
//    - HTML 파일 수정 금지
//    - image.png 파일을 보고 css 작성

const tableElem = document.getElementById("table");
tableElem.innerHTML += 
`<thead>
    <tr>
        <th>번호</th>
        <th>이름</th>
        <th>나이</th>
        <th>전화번호</th>
        <th>성별</th>
    </tr>
</thead>
<tbody id="info">
</tbody>
<tfoot>
</tfoot>`

const infoElem = document.getElementById("info");
for(let i = 0; i < 7; i++){
    infoElem.innerHTML += 
`   <tr>    
        <td>${i+1}</td>
        <td>${classAWS[i].name}</td>
        <td>${classAWS[i].age}</td>
        <td>${classAWS[i].phoneNum}</td>
        <td>${classAWS[i].sex}</td>
    </tr>    
        `}

// tableElem.innerHTML += 
// `<thead>
//     <tr>
//         <th>번호</th>
//         <th>이름</th>
//         <th>나이</th>
//         <th>전화번호</th>
//         <th>성별</th>
//     </tr>
// </thead>
// <tbody>

//     <tr>`
//     for(let i = 0; i < 7; i++){
//         `<td>${i}</td>
//         <td>${classAWS[i].name}</td>
//         <td>${classAWS[i].age}</td>
//         <td>${classAWS[i].phoneNum}</td>
//         <td>${classAWS[i].sex}</td>`
//     }
//     `</tr>

// </tbody>
// <tfoot>
// </tfoot>`

document.body.innerHTML += '<link rel="stylesheet" href="./index.css">'