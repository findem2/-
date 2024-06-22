// document.getElementGetById(contents).form

// const contents = {
//     title:["프로그래밍", "자라스크립트란?","자라스크립트 개발 환경과 실행방법"],
//     subtitle1:["프로그래밍이란?","프로그래밍 언어","구문과 의미"],
//     subtitle2:["자바스크립트의 탄생","자바스크립트의 표준화","자바스크립트 성장의 역사","자바스크립트와 ECMAScript","자바스크립트의 특징","ES6 브라우저 지원 현황"],
//     subtitle3:["개발자 도구","콘솔","브라우저에서 자바스크립트 실행","디버깅"],
//     head1:["Ajax","jQuery","V8 자바스크립트 엔진","Node.js","SPA 프레임워크"],
//     head2:["자바스크립트 실행 환경","웹 브라우저"]   
// }

let contentsElem = document.getElementById("contents");
const contents = [
    { 
        title: "프로그래밍", 
        children:[
            {title:"프로그래밍이란?"},
            {title:"프로그래밍 언어"},
            {title:"구문과 의미"}
        ] 
    },
    {   title:"자라스크립트란?",
        children:[
            { title: "자바스크립트의 탄생" },
            { title:"자바스크립트의 표준화" },
            { title: "자바스크립트 성장의 역사",
                children:
                [
                    "Ajax",
                    "jQuery",
                    "V8 자바스크립트 엔진",
                    "Node.js",
                    "SPA 프레임워크"
                ]
            },
            {title:"자바스크립트와 ECMAScript"},
            {title:"자바스크립트의 특징"},
            {title:"ES6 브라우저 지원 현황"}
        ]
    },
    {
        title:"자라스크립트 개발 환경과 실행방법",
        children:
        [
            {title:"자바스크립트 실행 환경"},
            {
                title:"웹 브라우저",
                children:
                [
                    "개발자 도구",
                    "콘솔",
                    "브라우저에서 자바스크립트 실행",
                    "디버깅"
                ]
            }
        ]
    }
]

const olElem = document.createElement('ol');

const liElem1 = document.createElement('li');
liElem1.innerText = contents[0].title;
const ulElem1_1 = document.createElement('ol');
const liElem1_1 = document.createElement('li');
liElem1_1.innerText = contents[0].children[0].title;
ulElem1_1.append(liElem1_1);
const liElem1_2 = document.createElement('li');
liElem1_2.innerText = contents[0].children[1].title;
ulElem1_1.append(liElem1_2);
const liElem1_3 = document.createElement('li');
liElem1_3.innerText = contents[0].children[2].title;
ulElem1_1.append(liElem1_3);
liElem1.append(ulElem1_1);
olElem.append(liElem1);

const liElem2 = document.createElement('li');
liElem2.innerText = contents[1].title;
const ulElem2_1 = document.createElement('ol');
const liElem2_1 = document.createElement('li');
liElem2_1.innerText = contents[1].children[0].title;
ulElem2_1.append(liElem2_1);
const liElem2_2 = document.createElement('li');
liElem2_2.innerText = contents[1].children[1].title;
ulElem2_1.append(liElem2_2);
const liElem2_3 = document.createElement('li');
liElem2_3.innerText = contents[1].children[2].title;
const ulElem2_3_1 = document.createElement('ul');
const liElem2_3_1 = document.createElement('li');
liElem2_3_1.innerText = contents[1].children[2].children[0];
ulElem2_3_1.append(liElem2_3_1);
const liElem2_3_2 = document.createElement('li');
liElem2_3_2.innerText = contents[1].children[2].children[1];
ulElem2_3_1.append(liElem2_3_2);
const liElem2_3_3 = document.createElement('li');
liElem2_3_3.innerText = contents[1].children[2].children[2];
ulElem2_3_1.append(liElem2_3_3);
const liElem2_3_4 = document.createElement('li');
liElem2_3_4.innerText = contents[1].children[2].children[3];
ulElem2_3_1.append(liElem2_3_4);
const liElem2_3_5 = document.createElement('li');
liElem2_3_5.innerText = contents[1].children[2].children[4];
ulElem2_3_1.append(liElem2_3_5);
liElem2_3.append(ulElem2_3_1);
ulElem2_1.append(liElem2_3);
const liElem2_4 = document.createElement('li');
liElem2_4.innerText = contents[1].children[3].title;
ulElem2_1.append(liElem2_4);
const liElem2_5 = document.createElement('li');
liElem2_5.innerText = contents[1].children[4].title;
ulElem2_1.append(liElem2_5);
const liElem2_6 = document.createElement('li');
liElem2_6.innerText = contents[1].children[5].title;
ulElem2_1.append(liElem2_6);
liElem2.append(ulElem2_1);
olElem.append(liElem2);

const liElem3 = document.createElement('li');
liElem3.innerText = contents[2].title;
const ulElem3_1 = document.createElement('ul');
const liElem3_1 = document.createElement('li');
liElem3_1.innerText = contents[2].children[0].title;
ulElem3_1.append(liElem3_1);
const liElem3_2 = document.createElement('li');
liElem3_2.innerText = contents[2].children[1].title;
const ulElem3_2_1 = document.createElement('ol');
const liElem3_2_1 = document.createElement('li');
liElem3_2_1.innerText = contents[2].children[1].children[0];
ulElem3_2_1.append(liElem3_2_1);
const liElem3_2_2 = document.createElement('li');
liElem3_2_2.innerText = contents[2].children[1].children[1];
ulElem3_2_1.append(liElem3_2_2);
const liElem3_2_3 = document.createElement('li');
liElem3_2_3.innerText = contents[2].children[1].children[2];
ulElem3_2_1.append(liElem3_2_3);
const liElem3_2_4 = document.createElement('li');
liElem3_2_4.innerText = contents[2].children[1].children[3];
ulElem3_2_1.append(liElem3_2_4);
liElem3_2.append(ulElem3_2_1);
ulElem3_1.append(liElem3_2);
liElem3.append(ulElem3_1);
olElem.append(liElem3);

const contentsContainer = document.getElementById('contents');
contentsContainer.append(olElem);

// const list = (contents) => {
//     return contents[0];
//     for(let i = 0; i < 3; i++){

//     }
// }