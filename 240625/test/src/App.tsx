// import Borad from "./Components/Borad";
// import Info from "./Components/Info";
// import Review from "./Components/Review";
// import Video from "./Components/Video";
// import { Routes, Route, Link, useLocation } from "react-router-dom"
// import  Write  from "./Components/Write"

// function App() {
//   const loca = useLocation()
//   console.log(loca)
//   return (
//     <div>
//       <nav>
//         <ul className="id">
//           <li className={`child ${loca.pathname == "/" && "bg-blue-300 text-white"}`} >
//             <Link to={"/"}>게시판 카테고리</Link>
//           </li>
//           <li className={`child ${loca.pathname == "/borad" && "bg-blue-300 text-white"}`} >
//             <Link to={"/borad"} >자유게시판</Link>
//           </li>
//           {/* <li>
//             <Link to={"/Root"} className="text-orange-600">루트</Link>
//           </li> */}
//           <li className={`child ${loca.pathname == "/review" && "bg-blue-300 text-white"}`} >
//             <Link to={"/review"} >리뷰게시판</Link>
//           </li>
//           <li className={`child ${loca.pathname == "/video" && "bg-blue-300 text-white"}`} >
//             <Link to={"/video"} >네이버 동영상 게시판</Link>
//           </li>
//           <li className={`child ${loca.pathname == "/info" && "bg-blue-300 text-white"}`} >
//             <Link to={"/info"} >자료실 게시판</Link>
//           </li>
//         </ul>
//       </nav>
//       <Routes>
//         <Route path="/" element={<div>saya</div>}/>
//         <Route path="/write" Component={Write}/>
//         <Route path="/borad" Component={Borad}/>
//         <Route path="/video" Component={Video}/>
//         <Route path="/review" Component={Review}/>
//         <Route path="/info" Component={Info}/>
//       </Routes>
//     </div>
//   );
// }

// export default App;

import Borad from "./Components/Borad";
import Info from "./Components/Info";
import Review from "./Components/Review";
import Video from "./Components/Video";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Write from "./Components/Write";
import { FC, useState } from "react";

const App: FC = () => {
  const loca = useLocation();
  console.log(loca);

  const handleWrite = (content: string, writer: string, title: string): void => {
    // write 함수의 내용을 여기에 구현하세요
    console.log("Content:", content);
    console.log("Writer:", writer);
    console.log("Title:", title);
  };

  return (
    <div>
      <nav>
        <ul className="id">
          <li className={`child ${loca.pathname === "/" && "bg-blue-300 text-white"}`}>
            <Link to="/">게시판 카테고리</Link>
          </li>
          <li className={`child ${loca.pathname === "/borad" && "bg-blue-300 text-white"}`}>
            <Link to="/borad">자유게시판</Link>
          </li>
          <li className={`child ${loca.pathname === "/review" && "bg-blue-300 text-white"}`}>
            <Link to="/review">리뷰게시판</Link>
          </li>
          <li className={`child ${loca.pathname === "/video" && "bg-blue-300 text-white"}`}>
            <Link to="/video">네이버 동영상 게시판</Link>
          </li>
          <li className={`child ${loca.pathname === "/info" && "bg-blue-300 text-white"}`}>
            <Link to="/info">자료실 게시판</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<div>saya</div>} />
        <Route path="/write" element={<Write write={handleWrite} />} />
        <Route path="/borad" element={<Borad />} />
        <Route path="/video" element={<Video />} />
        <Route path="/review" element={<Review />} />
        <Route path="/info" element={<Info />} />
      </Routes>
    </div>
  );
};

export default App;
