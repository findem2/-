import { ChangeEvent, FC, useCallback, useState } from "react";
// react에서  ChangeEvent, FC, useCallback, useState를 받아온다.
export interface IProps {
  add(title: string, content: string): void;
}
// IProps를 생성해서 add는 string을 가진 title와 content를 내보내준다

const Write: FC<IProps> = ({ add }) => {
  // 함수 Write에타입은 FC이며 매개변수는 add로 받아온다
  const [title, setTitle] = useState<string>("");
  // 변수 title와 업데이트하는 변수 setTitle 만들고  초기값은string타입이며 ""로 설정합니다.
  const [content, setContent] = useState<string>("");
  // 변수 content와 업데이트하는 변수 setContent 만들고  초기값은 string타입아며 ""로 설정합니다.
  const changeTitle = useCallback(
    // changeTitle라는 변수를 useCallback한다
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setTitle(value);
      // ??
    },
    []
  );

  const changeContent = useCallback(
    // changeContent 변수를 useCallback한다
    ({ target: { value } }: ChangeEvent<HTMLInputElement>): void => {
      setContent(value);
      // ??
    },
    []
  );

  const changeContent2 = useCallback(
    // changeContent2 변수를 useCallback한다
    ({ target: { value } }: ChangeEvent<HTMLTextAreaElement>): void => {
      setContent(value);
      // ??
    },
    []
  );

  const submit = () => {
    // 함수submit를 만들고 add에는 (title, content)를 setTitle은 빈string으로, setContent도 빈스트링으로 받아오게 만든다
    add(title, content);
    setTitle("");
    setContent("");
  };
  return (
    <div>
      <div className="text-2xl font-extrabold m-10">자유게시판</div>
      <div className="m-10 w-[1450px]">
        <div className="flex border-t-[3px] border-b-[1px] border-solid border-x-gray-400 leading-10 bg-stone-300">
          <div className="mr-3 ml-5 w-25">제목</div>
          <input
            type="text"
            value={title}
            onInput={changeTitle}
            className="h-5 flex-1 pl-1 m-3"
          />
        </div>
        <div className="flex mt-3 border-t-[2px] border-b-[2px] border-solid border-x-gray-400 bg-stone-300">
          <div className="mr-3 ml-5 w-25 leading-[380px]">내용</div>
          <input
            className="h-[380px] flex-1 pl-1 m-3 resize-none"
            type="text"
            value={content}
            onInput={changeContent}
          ></input>
        </div>
        <textarea onChange={changeContent2}></textarea>
      </div>
      <div className="mr-10 float-right">
        <button
          className="w-20 h-10 bg-cyan-300 border-0 rounded text-white"
          onClick={submit}
        >
          글쓰기
        </button>
      </div>
    </div>
  );
};

export default Write;
// Write라고 기본값을 보내준다

// 게시판 UI 만들기
// 게시글에 대한 인터페이스 구현
