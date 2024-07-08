import { FC } from "react";
// react에서 FC를 받아온다
import { IList } from "../App";
// ../App에서 IList를 받아온다
import { useParams, Link } from "react-router-dom";
// react-router-dom에서 useParams, Link 를 받아온다

interface IRoot {
  // IRoot라는 객체를 생성한다
  titleLists: IList[];
  // titleLists에 IList라는 타입을 주고 배열로 묶는다
}

const Root: FC<IRoot> = ({ titleLists }) => {
  // Root라는 함수를 만든다 타입은 FC고 titleLists를 매개변수로 가져온다
  // const params = useParams();
  // console.log(params);
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      <div className="m-10 w-[1450px]">
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400">
          <div className="text-center w-[100px] leading-10 text-center">NO</div>
          <div className="text-center flex-1 leading-10 text-center">제목</div>
          <div className="text-center w-[100px] leading-10 text-center">
            글쓴이
          </div>
          <div className="text-center w-[200px] leading-10 text-center">
            작성시간
          </div>
          <div className="text-center w-[100px] leading-10 text-center">
            좋아요
          </div>
        </div>
        {titleLists.map((list) => {
          // ...?
          return (
            <div className="flex border-b-[1px] border-solid border-x-gray-400">
              <div className="text-center w-[100px] leading-10 text-center">
                {list.num}
                {/* 리스트에서 num를 받아온다 */}
              </div>
              <div className="flex-1 leading-10 text-left">
                <Link to={`/board/${list.num}`}>{list.title}</Link>
                {/* list.title를 누르면 /board/${list.num}로 이동한다. */}
              </div>
              <div className="text-center w-[100px] leading-10 text-center">
                {list.writer}
                {/* 리스트에서 writer를 받아준다 */}
              </div>
              <div className="text-center w-[200px] leading-10 text-center">
                {list.date}
                {/* 리스트에서 date를 받아준다 */}
              </div>
              <div className="text-center w-[100px] leading-10 text-center">
                {list.like}
                {/* 리스트에서 like를 받아준다 */}
              </div>
            </div>
          );
        })}
      </div>
      <div className="mr-10 float-right">
        <button className="w-20 h-10 bg-cyan-300 border-0 rounded text-white">
          <Link to={"/write"}>글쓰기</Link>
          {/* 글쓰기라는 버튼을 누르면 /write로 이동하는 링크를 만든다 */}
        </button>
      </div>
    </div>
  );
};

export default Root;
