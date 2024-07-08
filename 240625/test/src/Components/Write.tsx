import {
  FC,
  useState,
  ChangeEvent,
  Component,
  KeyboardEvent,
  ReactNode,
  FunctionComponent,
} from "react";

import { Routes, Route, Link } from "react-router-dom";

export interface Props {
  write(content: string, writer: string, title: string): void;
}

const Write: FC<Props> = ({ write }) => {
  const [content, setContent] = useState<string>("");
  const [writer, setWriter] = useState<string>("");
  const [title, setTitle] = useState<string>("");

  const Submit = (e: any) => {
    e.preventDefault();
    if (!content && !writer && !title) return;
    write(content, writer, title);
    setContent("");
    setWriter("");
    setTitle("");
  };

  const ContentInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setContent(value);
  };

  const WriterInput = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setWriter(value);
  };

  const TitleInput = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setTitle(value);
  };

  return (
    <div>
      <form className="mt-5 mx-5" onSubmit={Submit}>
        <div className="mb-5 border bg-blue-200 leading-10">
          작성자
          <input
            className="ml-3 pl-2 h-6 w-11/12"
            placeholder="작성자명을 입력하세요."
            type="text"
            id="todo-content"
            value={[writer]}
            onChange={WriterInput}
          />
        </div>
        <div className="mb-5 border bg-blue-200 leading-10">
          제목
          <input
            className="ml-3 pl-2 h-6 w-11/12"
            placeholder="제목을 입력하세요."
            type="text"
            id="todo-content"
            value={[title]}
            onChange={TitleInput}
          />
        </div>
        <div className="mb-5 border bg-blue-200 h-72 flex items-center">
          내용
          <input
            className="ml-3 pl-2 py-28 w-11/12"
            placeholder="내용을 입력하세요."
            type="text"
            id="todo-content"
            value={[content]}
            onChange={ContentInput}
          />
        </div>
        <button
          className="mr-3 box-border h-10 w-20 bg-red-300 hover:bg-red-500 ring ring-red-800 ring-offset-0"
          type="submit"
        >
          저장
        </button>
        <a href="javascript:history.back()" type="button">
          <button
            // onClick={this.cancel}
            className="box-border h-10 w-20 bg-yellow-300 hover:bg-yellow-500 ring ring-yellow-800 ring-offset-0"
          >
            취소
          </button>
        </a>
      </form>
    </div>
  );
};

export default Write;
