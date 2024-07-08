import { Route, Routes, Link, useLocation } from "react-router-dom";
// react-router-dom에서 Route, Routes, Link, useLocation를 받아온다
import { useState, ChangeEvent, useCallback } from "react";
// react에서 useState, ChangeEvent, useCallback를 받아온다.
import Root from "./Components/Root";
// ./Components/Root에서 Root라는 파일을 받아온다
import Board from "./Components/Board";
// ./Components/Board에서 Board라는 파일을 받아온다
import Write from "./Components/Write";
// ./Components/Write에서 Write라는 파일을 받아온다
import { IProps } from "./Components/Write";
// ./Components/Write에서 IProps를 받아온다

export interface IList {
  num: number;
  title: string;
  writer: string;
  date: string;
  like: number;
  content: string;
}
// IList 라는 객체을 생성해서 각각
// num: number;
// title: string;
// writer: string;
// date: string;
// like: number;
// content: string; 이렇게 타입을 준다

function App() {
  // function App를 만든다
  const loca = useLocation();
  // loca를 useLocation로 초기화 한다.
  console.log(loca);
  // 콘솔창에 loca를 띄운다

  const [num, setNum] = useState<number>(11);
  // 변수 num과 업데이트하는 변수 setNum를 만들고  초기값number타입이며 11로 설정합니다.
  const [titlelists, setTitlelists] = useState<IList[]>([
    // itlelists와 업데이트하는 함수 setTitlelists를 만들고  초기값을 IList로 설정합니다
    {
      num: 10,
      title: "네이버 지도(v5) 임베드",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "10번글",
    },
    {
      num: 9,
      title: "제목",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "9번글",
    },
    {
      num: 8,
      title: "구글 지도 게시물에 임베드 하기",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "8번글",
    },
    {
      num: 7,
      title: "아이폰 7 플러스",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "7번글",
    },
    {
      num: 6,
      title: "분위기 최고네요~!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "6번글",
    },
    {
      num: 5,
      title: "진짜로 갑니다~~",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "5번글",
    },
    {
      num: 4,
      title: "탭 메뉴 이미지",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "4번글",
    },
    {
      num: 3,
      title: "응원합니다!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "3번글",
    },
    {
      num: 2,
      title: "이번엔 가즈아아아아아아아!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "2번글",
    },
    {
      num: 1,
      title: "제목만 보여주기!",
      writer: "박성민",
      date: "24-06-27",
      like: 0,
      content: "1번글",
    },
    // 리스트에 들어가는 내용
  ]);

  // const [inputs, setInputs] = useState({
  //   num: 0,
  //   title: "",
  //   writer: "박성민",
  //   date: "24-06-27",
  //   like: 0,
  //   content: "",
  // });

  const handleWrite = (title: string, content: string): void => {
    // handleWrite 함수에 제목과 내용을 받을수 있게한다
    // console.log("Title:", title);
    // console.log("Content:", content);
    // const copy = [...titlelists];
    // copy.unshift({
    //   num,
    //   title,
    //   writer: "박성민",
    //   date: "24-06-27",
    //   like: 0,
    //   content,
    // });
    setTitlelists([
      {
        num,
        title,
        writer: "박성민",
        date: "24-06-27",
        like: 0,
        content,
      },
      // setTitlelists에 writer date like 빼고 새로운 내용이 들어있는 게시글을 만든다
      ...titlelists,
      // ??
    ]);
    // setTitlelists(copy);
    setNum(num + 1);
    // 업데이트 할때마다 num에 1씩 더한다
  };

  return (
    <div>
      <nav className="nav">
        <ul className="ul">
          <li
            className={`li ${
              loca.pathname === "/" && "bg-blue-300 text-white"
            }`}
            // className을 li로 넣고 loca.pathname은 "/"이고 "bg-blue-300 text-white"을 적용
          >
            <Link to={"/"}>메인페이지</Link>
            {/* 메인페이지를 누르면 "/"로 이동가능한 링크를 만든다 */}
          </li>
          <li
            className={`li ${
              loca.pathname === "/board" && "bg-blue-300 text-white"
            }`}
            // className을 li로 넣고 loca.pathname은 "/board"이고 "bg-blue-300 text-white"을 적용
          >
            <Link to={"/board"}>게시판</Link>
            {/* 메인페이지를 누르면 "/board"로 이동가능한 링크를 만든다 */}
          </li>
          <li
            className={`li ${
              loca.pathname === "/write" && "bg-blue-300 text-white"
            }`}
            // className을 li로 넣고 loca.pathname은 "/write"이고 "bg-blue-300 text-white"을 적용
          >
            <Link to={"/write"}>글쓰기</Link>
            {/* 메인페이지를 누르면 "/write"로 이동가능한 링크를 만든다 */}
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Root titleLists={titlelists} />}></Route>
        {/* "/"를 Root라 하고  titlelists를 titlelists로 받아온다 */}
        <Route
          path="/board/:num"
          element={<Board BoardList={titlelists} />}
          // "/board/"타입은 숫자이며 Board라 하고  BoardList를 titlelists로 받아온다
        ></Route>
        <Route path="/write" element={<Write add={handleWrite} />}></Route>
        {/* "/write"를 받아 Write라 하고 Write add에 handleWrite를 받아온다 */}
      </Routes>
    </div>
  );
}

export default App;
// App으로 기본값을 내보내준다
