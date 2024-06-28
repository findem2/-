```bash
cd HARU/func-test
npm list -g
create-react-app test --template typescript
# create-react-app 뒤에 원하는 폴더 올렸어
cd test5
npm i sass tailwindcss
npx tailwindcss init
npm start
```

App.tsx 에서  아래와 같이 수정
```js
import './App.css';

function App() {
  return (
    <div className="container mx-auto">
      <div className="border">test</div>  
    </div>
  );
}
```

index.css를 => index.scss로 수정후 내용 주석 그리고 밑에 내용 입력
```js
@tailwind base;
@tailwind components;
@tailwind utilities;
```

tailwind.config.js 파일의 내용을 밑에와 같이 수정
```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

index.tsx에서 밑에와 같이 만듬
```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <App />
  // </React.StrictMode>
  // 이게 원격모드
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
```
