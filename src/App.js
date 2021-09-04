/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';

function App() {

  const [gangnam, setGangnam] = useState(["강남", "대치", "선릉"]);
  const [gandong, setGandong] = useState("강동")
  const [gangbok, setgangbok] = useState("강북")
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)

  const ClickHandler = () => {
    setCount(count + 1)
  }

  const changHandler = () => {
    let newArray = [...gangnam];
    newArray[0] = "잠실"
    setGangnam(newArray);
  }

  const onClickChang = () => {
    setModal(true)
  }

  return (
    <div className="App">
      <div className="balck-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changHandler}>버튼</button>
      <div className="list">
        <h3>{ gangnam } <span onClick={ClickHandler}>👍</span> {count}</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3>{ gandong }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3 onClick={onClickChang}>{ gangbok }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    {
      modal === true
      ? <Modal/>
      : null
    }

    </div>
  );
}

function Modal() {
  return(
    <>
      <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}


export default App;
