// import { FC } from "react"
// import { Route, Routes, useParams, Link } from "react-router-dom"
// import  Write  from "./Write"

// interface IProps{}

// const posts = [
//     { num: 10, title: '네이버 지도(v5) 임베드', writer: '아임웹', date: '2019-12-17', likes: 0 },
//     { num: 9, title: '제목', writer: '아임웹', date: '2019-12-16', likes: 0 },
//     { num: 8, title: '구글 지도 게시물에 임베드 하기', writer: '아임웹', date: '2019-12-16', likes: 0 },
//     { num: 7, title: '아이폰 7 플러스', writer: '아임웹', date: '2018-05-14', likes: 0 },
//     { num: 6, title: '분위기 최고네요~!', writer: '아임웹', date: '2018-04-17', likes: 0 },
//     { num: 5, title: '진짜로 갑니다~~', writer: '아임웹', date: '2018-04-17', likes: 0 },
//     { num: 4, title: '탭 메뉴 이미지', writer: '아임웹', date: '2017-12-06', likes: 0 },
//     { num: 3, title: '응원합니다!', writer: '아임웹', date: '2017-11-20', likes: 0 },
//     { num: 2, title: '이번엔 가즈아아아아아아!', writer: '아임웹', date: '2017-11-20', likes: 0 },
//     { num: 1, title: '제목만 보여주기!', writer: '아임웹', date: '2017-11-20', likes: 0 },
// ];

// const Borad:FC<IProps> = ({}) => {
//     const params = useParams(); 
//     console.log(params)

//     return (
//     <div className="m-8">
//         <div className="">
//             <h1 className="text-3xl mb-6">자유게시판</h1>   
//             <table className="mb-5 w-full">
//                 <thead>
//                     <tr className="border-t-2 border-gray-950 border-b-2 border-black-500 flex justify-between gap-4 py-1">
//                         <td className="px-4 float-left w-1/12">No</td>
//                         <td className="px-4 float-left w-5/12">제목</td>
//                         <td className="px-4 float-left w-2/12">글쓴이</td>
//                         <td className="px-4 float-left w-3/12">작성시간</td>
//                         <td className="px-4 float-left w-2/12">좋아요</td>
//                     </tr>      
//                 </thead>
//                 <tbody className="" id="list">
//                     {posts.map(post => (
//                         <tr key={post.num} className="border-b-2 border-black-500 flex justify-between gap-4 py-1">
//                             <td className="px-4 float-left w-1/12">{post.num}</td>
//                             <td className="px-4 float-left w-5/12">{post.title}</td>
//                             <td className="opacity-30 px-4 w-2/12 float-left">{post.writer}</td>
//                             <td className="opacity-30 px-4 w-3/12 float-left">{post.date}</td>
//                             <td className="opacity-30 px-4 w-2/12 float-left">{post.likes}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//             <Link to={"/write"} className=" bg-blue-500 text-white py-2 px-4 rounded float-right"><button id="Write">글쓰기</button></Link>
//         </div>
//     </div>
//     )
// }

// export default Borad;

import { FC } from "react";
import { Route, Routes, useParams, Link } from "react-router-dom";
import Write from "./Write";

interface IProps {}

const posts = [
    { num: 10, title: '네이버 지도(v5) 임베드', writer: '아임웹', date: '2019-12-17', likes: 0 },
    { num: 9, title: '제목', writer: '아임웹', date: '2019-12-16', likes: 0 },
    { num: 8, title: '구글 지도 게시물에 임베드 하기', writer: '아임웹', date: '2019-12-16', likes: 0 },
    { num: 7, title: '아이폰 7 플러스', writer: '아임웹', date: '2018-05-14', likes: 0 },
    { num: 6, title: '분위기 최고네요~!', writer: '아임웹', date: '2018-04-17', likes: 0 },
    { num: 5, title: '진짜로 갑니다~~', writer: '아임웹', date: '2018-04-17', likes: 0 },
    { num: 4, title: '탭 메뉴 이미지', writer: '아임웹', date: '2017-12-06', likes: 0 },
    { num: 3, title: '응원합니다!', writer: '아임웹', date: '2017-11-20', likes: 0 },
    { num: 2, title: '이번엔 가즈아아아아아아!', writer: '아임웹', date: '2017-11-20', likes: 0 },
    { num: 1, title: '제목만 보여주기!', writer: '아임웹', date: '2017-11-20', likes: 0 },
];

const Board: FC<IProps> = ({}) => {
  const params = useParams();
  console.log(params);

  const boradWrite = (content: string, writer: string, title: string): void => {
    // 글 작성 로직 구현
    console.log("Content:", content);
    console.log("Writer:", writer);
    console.log("Title:", title);
  };

  return (
    <div className="m-8">
      <div className="">
        <h1 className="text-3xl mb-6">자유게시판</h1>
        {/* 기존 게시물 리스트 렌더링 */}
        <table className="mb-5 w-full">
                <thead>
                    <tr className="border-t-2 border-gray-950 border-b-2 border-black-500 flex justify-between gap-4 py-1">
                        <td className="px-4 float-left w-1/12">No</td>
                        <td className="px-4 float-left w-5/12">제목</td>
                        <td className="px-4 float-left w-2/12">글쓴이</td>
                        <td className="px-4 float-left w-3/12">작성시간</td>
                        <td className="px-4 float-left w-2/12">좋아요</td>
                    </tr>      
                </thead>
                <tbody className="" id="list">
                    {posts.map(post => (
                        <tr key={post.num} className="border-b-2 border-black-500 flex justify-between gap-4 py-1">
                            <td className="px-4 float-left w-1/12">{post.num}</td>
                            <td className="px-4 float-left w-5/12">{post.title}</td>
                            <td className="opacity-30 px-4 w-2/12 float-left">{post.writer}</td>
                            <td className="opacity-30 px-4 w-3/12 float-left">{post.date}</td>
                            <td className="opacity-30 px-4 w-2/12 float-left">{post.likes}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        <Link to={"/write"} className=" bg-blue-500 text-white py-2 px-4 rounded float-right">
          <button id="Write">글쓰기</button>
        </Link>
        <Routes>
          <Route path="/write" element={<Write write={boradWrite} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Board;