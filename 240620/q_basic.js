// README.md 파일을 참고하여 목록을 작성하시오.
//   - 목록의 식별자(변수명)는 contents.
// contents를 사용하여 웹 페이지에 목록을 출력하시오.
// 목록 변경 시 HTML에서 출력되는 목록도 변경되도록 하시오.
// innerHTML을 사용하지 마시오.
// class contenst {
//     #Title
//     #subtitle
//     #list
//     #text
 
//     constructor(){
//         this.#Title = document.createElement("ol");
//         this.#subtitle = document.createElement("ul");
//         this.#list = document.createElement("li");
//         console.log(this.#Title)
        
//         this.#Title.classList.add("lotto-list");
//         document.getElementById("lotto-list").innerText = "ㄴㄷㅌ";
        
//         // this.#elem.innerText = this.#num + "입니다.";
//         this.#subtitle.classList.add("lotto-list");
//         document.getElementById("lotto-list").innerText = "ㄴㄷㅌ";

//         this.#list.classList.add("lotto-list");
//         document.getElementById("lotto-list").innerText = "ㄴㄷㅌ";
//     }
// }


class contenst {
    element;
    constructor({ title, list }) {
      this.element = document.createElement("div");
      const titleAElem = document.createElement("a");
      const titleElem = document.createElement("h3");
      titleElem.innerHTML = title;
      titleAElem.append(titleElem);
      this.element.append(titleAElem);
  
      const listElem = document.createElement("ul");
      list.forEach((item) => {
        const instance = new Item(item);
        listElem.append(instance.element);
      });
      this.element.append(listElem);
    }
  }

  document.getElementsByClassName("contents")[0].append(
    new Row({
      list: [
        {
          title: "명조 채널",
          list: [
            {
              title: "각 보스별 취얍속성같은거 있음?",
              commentCount: 1,
              
            },
            {
              title: "오늘의 보라왜가리 파밍은 망했다.",
              commentCount: 0,
              
            },
            {
              title: "홀로그램 고릴라 5단계 1돌 음림 솔플",
              commentCount: 2,
              
            },
            {
              title: "에코파밍 진짜 힘드네",
              commentCount: 3,
              updatedAt: Date.now() - 6 * 60 * 1000,
            },
          ],
        },
      ]
    }
))