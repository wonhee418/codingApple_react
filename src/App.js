// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
// import { fireEvent } from '@testing-library/react';

function App() {
  // let post = "강남 우동 맛집";
  let [글제목, 글제목변경] = useState([
    "남자 코트 추천",
    "맛집 추천",
    "가 코트 추천",
  ]);
  let [따봉, 따봉변경] = useState([0,0,0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');


  // mpa 의 특징
  // 1. .map() -> 배열의 갯수만큼 펑션이 실행됌.
  // 2. 파라미터에 값을 넣어주면 파라미터에 배열의 0번째 데이터값부터 차례로 들어감
  // 3. 파라미터 2개를 넣어준다면 두번째 파라미터는 0부터 1씩 증가하는 정수
  // 4. return 사용시 해당 값을 실행횟수만큼 배열로 만들어짐.
  //
  // [1, 2, 3].map(function (a, i) {
  //   console.log(a, i);
  // });

  return (
    <div className="App">
      <div className="black-nav">
        <h4>ReactBlog</h4>
      </div>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          글제목변경(copy);
        }}
      >
        가나다순 정렬
      </button>

      <button
        onClick={() => {
          let copy = [...글제목];
          copy[0] = "여자 코트 추천";
          글제목변경(copy);
        }}
      >
        글수정
      </button>

      {
        글제목.map(function (a, i) {
          return (
            <div className="list" key={i}>
              <h4 onClick={() => {
                setModal(!modal); setTitle(i)
              }}>
                {글제목[i]}
                <span
                  onClick={(e) => {
                    e.stopPropagation();
                    let copy = [...따봉];
                    copy[i] += 1;
                    따봉변경(copy)
                  }}
                >
                  👍
                </span>
                {따봉[i]}
              </h4>
              <p>2월 17일 발행</p>
              <button onClick={()=>{
                //현재 글제목 배열을 copy에 복사
                let copy = [...글제목]
                let 따봉copy = [...따봉]
                //copy에서 내가 클릭한 글을 삭제
                copy.splice(i, 1)
                따봉copy.splice(i,1)
                //copy 삭제된 배열을 다시 글제목배열에 저장
                글제목변경(copy)
                따봉변경(따봉copy)
              }}>글삭제</button>
            </div>
            
          );
        })
      }

      <input required onChange={(e)=>{
        입력값변경(e.target.value);
        }} />
        <button onClick={()=> {
          let copy = [...글제목];
          let 따봉copy = [...따봉]
          copy.unshift(입력값)
          따봉copy.unshift(0)
          글제목변경(copy)
          따봉변경(따봉copy)
        }}>글추가</button>

      {modal === true ? <Modal title={title} 글제목={글제목}/> : null}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button>글수정</button>
    </div>
  );
}

export default App;
