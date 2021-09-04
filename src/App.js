/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';

function App() {

  const [gangnam, setGangnam] = useState(['남자코트 추천', '강남 우동맛집', '파이썬독학']);
  const [count, setCount] = useState(0)
  const [modal, setModal] = useState(false)
  const [clickName, setclickName] = useState(0)
  const [inputChange, setInputChange] = useState("")
  const [changeStatet, setchangeStatet] = useState("");

  const ClickHandler = () => {
    setCount(count + 1)
  }

  const changeModal = ()=>{ setModal(!modal) }

  return (
    <div className="App">
      <div className="balck-nav">
        <div>개발 Blog</div>
      </div>
    {
      gangnam.map(function (e, i) {
        return(
          <div key={i} className="list">
          <h3 onClick={()=>{setclickName(i)}} > {e}<span onClick={ClickHandler}>👍</span>
          {count}</h3>
          <p>2월 18일 발행</p>
          <hr />
        </div>
        )
      })
    }

<div className="publish">
        <input onChange={(e)=>{setchangeStatet(e.target.value)}} />
        <button onClick={()=>{
          let gangnamCopy = [...gangnam]
          gangnamCopy.unshift(changeStatet);
          setGangnam(gangnamCopy);
        }}>저장</button>
      </div>

      <button onClick={ changeModal }> 열고닫는버튼 </button>

    {
      modal === true 
      ? <Modal gangnam={gangnam} clickName={clickName}></Modal>
      : null
    }

    </div>
  );
}

function Modal(props) {
  return(
    <>
      <div className="modal">
        <h2>제목 {props.gangnam[props.clickName]}</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}


export default App;
