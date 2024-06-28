import { FC } from "react"
import {Routes,Route,Link} from "react-router-dom"
// import  {list}  from "./Borad"

// interface IProps {
//   add(title: string): void;
// }

// add = (): void => {
//   if (!this.state.title) return;
//   this.props.add(this.state.title);
//   this.setState({ title: "" });
// };

const Write = ({}) => {
    return(<div>
            <div className="mt-5 mx-5">
                <div className="mb-5 border bg-blue-200 leading-10">제목
                    <input type="title" placeholder="제목을 입력하세요" className="ml-3 pl-2 h-6 w-11/12"/>
                </div>
                <div className="mb-5 border bg-blue-200 leading-10">작성자
                    <input type="writer" placeholder="작성자명을 입력하세요" className="ml-3 pl-2 h-6 w-11/12"/>
                </div>
                <div className="mb-5 border bg-blue-200 h-72 flex items-center">내용
                    <input type="content" placeholder="내용을 입력하세요" className="ml-3 pl-2 py-28 w-11/12"/>
                </div>
                <div className="float-left">
                    <a href={"/borad"} type="button"><button 
                    onClick={(e) => console.log('Click')}
                    id="addBtn"className="mr-3 box-border h-10 w-20 bg-red-300 hover:bg-red-500 ring ring-red-800 ring-offset-0">완료</button></a>
                    <a href="javascript:history.back()" type="button"><button 
                    // onClick={this.cancel} 
                    className="box-border h-10 w-20 bg-yellow-300 hover:bg-yellow-500 ring ring-yellow-800 ring-offset-0">취소</button></a>
                </div>
            </div>
        </div>
    );
};


// export default class Add extends Component<IProps, IState> {
//   constructor(props: IProps) {
//     super(props);
//     this.state = { content: "" };
//   }

//   add = (): void => {
//     if (!this.state.content) return;
//     this.props.add(this.state.content);
//     this.setState({ content: "" });
//   };

//   render(): ReactNode {
//     return (
//       <form
//         className="flex items-center gap-2 p-1 border-b-4 border-black border-double"
//         onSubmit={(e) => {
//           e.preventDefault();
//           this.add();
//         }}
//       >
//         <label htmlFor="todo-content">Todo :</label>
//         <input
//           className="flex-1 border rounded border-gray-500"
//           type="text"
//           id="todo-content"
//           value={this.state.content}
//           onInput={({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
//             // console.log(value);
//             this.setState({ content: value });
//           }}
//           //   onKeyUp={({ key }: KeyboardEvent<HTMLInputElement>) => {
//           //     if (key == "Enter") {
//           //         this.add();
//           //     }
//           //   }}
//         />
//         <button
//           className={[
//             "border",
//             "border-gray-400",
//             "rounded",
//             "p-1",
//             "px-5",
//             "bg-blue",
//             "select-none", // user-select: none;
//           ].join(" ")}
//           //   onClick={this.add}
//         >
//           추가
//         </button>
//       </form>
//     );
//   }
// }

// const MyComponent = () => {
//     const handleClick = () => {
//       console.log('버튼이 클릭되었습니다.');
//     };
  
//     return (
//       <div>
//         <button onClick={handleClick}>클릭해주세요</button>
//       </div>
//     );
// };

// export default class Add extends Component<IProps, IState> {
//     constructor(props: IProps) {
//       super(props);
//       this.state = { content: "" };
//     }
  
//     add = (): void => {
//       if (!this.state.content) return;
//       this.props.add(this.state.content);
//       this.setState({ content: "" });
//     };
// }

// const list = [
//     new Board("오늘의 점심은?", "이정배", "도시락"),
//     new Board("오늘의 저녁은?", "이승배", "뭐먹지?"),
//     new Board("오늘의 과제는?", "방지완", "지워주세요."),
//   ];
//   console.log(list);

// const listElem = document.getElementById("list");

// const reRender = () => {
//   //   listElem.innerHTML = "";
//   listElem.innerHTML = `<li class="header">
//       <ul class="row">
//         <li class="num box-center">번호</li>
//         <li class="title box-center">제목</li>
//         <li class="writer box-center">글쓴이</li>
//         <li class="createdAt box-center">등록일</li>
//       </ul>
//       </li>`;

//   list.forEach((item) => {
//     const tempElem = document.createElement("li");

//     tempElem.classList.add("item");
//     if (item.getIsNotice()) tempElem.classList.add("notice");

//     tempElem.innerHTML = `<ul class="row">
//     <li class="num box-center">${item.getId()}</li>
//     <li class="title">${item.getTitle()}</li>
//     <li class="writer box-center">${item.getWriter()}</li>
//     <li class="createdAt box-center">${item.getCreatedAt()}</li>
//   </ul>`;
//     tempElem.onclick = () => {
//       setView(item.getId() - 1);
//     };

//     listElem.append(tempElem);
//   });
// };

document.getElementById("addBtn") = (e) => {
    e.preventDefault();
    list.push(
    new Board(
      e.target.form.num.value,
      e.target.form.title.value,
      e.target.form.writer.value,
      e.target.form.content.value,
      e.target.form.date.auto,
    )
  );
  e.target.form.num.value =
  e.target.form.content.value =
  e.target.form.title.value =
  e.target.form.writer.value =
  e.target.form.date.value =
    "";
  reRender();
}

export default Write;