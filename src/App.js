/*eslint-disable*/
import React, { useState } from 'react';
import './App.css';

function App() {

  let posts = "강남 고기 맛집";
  
  const [gangnam, setGangnam] = useState("강남")
  const [gandong, setGandong] = useState("강동")
  const [gangbok, setgangbok] = useState("강북")
  const [count, setCount] = useState(0)


  const ClickHandler = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <div className="balck-nav">
        <div>개발 Blog</div>
      </div>
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
        <h3>{ gangbok }</h3>
        <p>2월 17일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
