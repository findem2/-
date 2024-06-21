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
console.log(contents)
contentsElem.innerText = "<div></div>"
const olElem = document.createElement("ol")
contentsElem.append(olElem)
// const list = (contents) => {
//     return contents[0];
//     for(let i = 0; i < 3; i++){

//     }
// }