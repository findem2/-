// 가족의 성함과 년생을 가지고있는 배열을 family 상수에 초기화 하시오
const family = [
    {name:"손민복",since:1996},
    {name:"손영길",since:1956},
    {name:"여복순",since:1957}
];

// family에서 /손민복을 찾아/ 년생을 출력하시오
// console.log(family.name("손민복").since());

// family에서 손민복을 찾기
for (let i = 0; i < family.length; i++) {
    if (family[i].name == "손민복") {
        console.log(family[i].since);
    }
}

// 손민복이라는걸 어떻게 찾아야 할까 ?? 어떨때 찾았다고 이야기 할수 있을까...
// 비교를 해서 같은지 확인해야한다. 비교한다는건 조건이 달려있다는 소리다.


const temp = {name:"손민복",since:1996}
console.log(temp.name);

// family에서 temp를 가져오기
const mb = family[0];