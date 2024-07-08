import { FC } from "react";
// react에서 FC를 받아온다
import { IList } from "../App";
// ../App위치에서 IList를 받아온다
import { useParams } from "react-router-dom";
// react-router-dom에서 useParams를 받아온다

export interface IBoard {
  // IBoard라는 객체을 생성후 내용을 내보내준다
  BoardList: IList[];
  // BoardList에 IList라는 배열이 들어감
}

const Board: FC<IBoard> = ({ BoardList }) => {
  // 함수 Board에타입은 FC이며 매개변수는 BoardList로 받아온다
  const params = useParams();
  // params라는 상수를 useParams로 초기화 한다.
  // const num = params.num ? +params.num : 0;
  // const board = BoardList[BoardList.length - +num] as IList;
  const board = BoardList.find((item) => `${item.num}` === params.num) as IList;
  // board라는 상수에  BoardList에서 item.num랑 params.num은 같다고 item을 찾아 넣고  IList에 적는다
  console.log(board);
  // board를 콘솔창에 보여준다
  // console.log(params);
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      {/* {BoardList.map((contents, i) => {
        return ( */}
      <div className="m-10 w-[1450px]">
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400 bg-stone-300">
          <div
            className="text-center flex-1 leading-10 text-center"
            // key={contents[].num}
          >
            {board.title}
            {/* board.title를 받아온다  */}
          </div>
          <div
            className="text-center w-[200px] leading-10 text-center"
            // key={contents.num}
          >
            {board.writer}
            {/* board에 writer를 받아온다  */}
          </div>
          <div
            className="text-center w-[200px] leading-10 text-center"
            // key={contents.num}
          >
            {board.date}
            {/* board에 date를 받아온다  */}
          </div>
          <div
            className="text-center w-[100px] leading-10 text-center"
            // key={contents.num}
          >
            {board.like}
            {/* board에 like를 받아온다  */}
          </div>
        </div>
        <div className="flex border-t-[2px] border-b-[2px] border-solid border-x-gray-400 mt-2.5">
          <div className="content-bg">
            <div
              className="m-5 h-[350px]"
              //  key={contents.num}
            >
              {board.content}
              {/* board에 content를 받아온다  */}
            </div>
          </div>
        </div>
      </div>
      {/* );
      })} */}
      <div className="mr-20 float-right">
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white mr-5">
          목록
        </button>
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white">
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Board;
