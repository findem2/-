// 가족의 성함과 년생을 가지고있는 배열을 family 상수에 초기화 하시오
const family = [
    {name:"손민복",since:1996},
    {name:"손영길",since:1956},
    {name:"여복순",since:1957}
];


// family에서 손민복을 찾기
for (let i = 0; i < family.length; i++) {
    if (family[i].name == "손민복") {
        console.log(family[i].since);
    }
}