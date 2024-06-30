import { FC, useState,ChangeEvent,Component, KeyboardEvent, ReactNode,FunctionComponent } from "react"

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

// const [content,setEmail]=useState('');
// const [writer,setPassword]=useState('');
// const [isValid, setIsValid]=useState(true);

// //input 태그안에 onChange에 실행될 함수를 따로 만들어준다.
// const handlerEmail = (e) => {
//   const contentValue = e.target.value;
//   setContent( contentValue );
// }
// const handlerPw = (e) => {
//   const writerValue = e.target.value;
//   setWriter( writerValue );
// }

// //실행함수
// const checkValue = (content,  writer, title ) => {
//   setIsValid( ! ( title.length < 20
//                   && content.length < 200 
//                   &&  writer.length < 7 ))
// }

export interface Props {
    write(content: string,writer: string,title: string): void;
}

const Write: FC<Props> = ({ write }) => {
    const [content, setContent] = useState<string>("");
    const [writer, setWriter] = useState<string>("");
    const [title, setTitle] = useState<string>("");

  const Write = (): void => {
    if (!content&&!writer&&!title) return;
    write(content,writer,title);
    setContent("");
    setWriter("");
    setTitle("");
  };

  const Submit = (e: any) => {
    e.preventDefault();
    Write();
  };

  const Input = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setContent(value);
    setWriter(value);
    setTitle(value);
  };

  return (
    <form
      className="flex items-center gap-2 p-1 border-b-4 border-black border-double"
      onSubmit={Submit}
    >
      <label htmlFor="todo-content">Todo :</label>
      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        id="todo-content"
        value={[content,writer,title]}
        onChange={Input}
      />
      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        id="todo-content"
        value={[writer]}
        onChange={Input}
      />
      <input
        className="flex-1 border rounded border-gray-500"
        type="text"
        id="todo-content"
        value={[title]}
        onChange={Input}
      />
      <button
        className={[
          "border",
          "border-gray-400",
          "rounded",
          "p-1",
          "px-5",
          "bg-blue",
          "select-none",
        ].join(" ")}
        type="submit"
      >
        추가
      </button>
      <a href="javascript:history.back()" type="button"><button 
          // onClick={this.cancel} 
          className="box-border h-10 w-20 bg-yellow-300 hover:bg-yellow-500 ring ring-yellow-800 ring-offset-0">취소</button></a>
      <a href="javascript:history.back()" type="button"><button 
          // onClick={this.cancel} 
          className="box-border h-10 w-20 bg-yellow-300 hover:bg-yellow-500 ring ring-yellow-800 ring-offset-0">취소</button></a>
    </form>
  );
};

export default Write;


// const Write = ({}) => {
//   const [title,setTitle]=useState('');
//   const [writer,setWriter]=useState('');
//   const [content,setContent]=useState('');
//   return(
//     <div>
//       <div className="mt-5 mx-5">
//         <div className="mb-5 border bg-blue-200 leading-10">제목
//           <input value={title} type="title" onChange={(e)=>setTitle(e.target.value)} placeholder="제목을 입력하세요(20자 이하)" className="ml-3 pl-2 h-6 w-11/12"/>
//         </div>
//         <div className="mb-5 border bg-blue-200 leading-10">작성자
//           <input value={writer} type="writer" onChange={(e)=>setWriter(e.target.value)} placeholder="작성자명을 입력하세요(7자 이하)" className="ml-3 pl-2 h-6 w-11/12"/>
//         </div>
//         <div className="mb-5 border bg-blue-200 h-72 flex items-center">내용
//           <input value={content} type="content" onChange={(e)=>setContent(e.target.value)} placeholder="내용을 입력하세요(200자 이하)" className="ml-3 pl-2 py-28 w-11/12"/>
//         </div>
//         <div className="float-left">
//           <a href={"."} type="button"><button 
//           onClick={(e) => console.log(e.target.value)}
//           id="addBtn"className="mr-3 box-border h-10 w-20 bg-red-300 hover:bg-red-500 ring ring-red-800 ring-offset-0">완료</button></a>
//           <a href="javascript:history.back()" type="button"><button 
//           // onClick={this.cancel} 
//           className="box-border h-10 w-20 bg-yellow-300 hover:bg-yellow-500 ring ring-yellow-800 ring-offset-0">취소</button></a>
//         </div>
//       </div>
//     </div>
//   );
// };

//  export default Write;