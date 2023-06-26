import './App.css';
import React, {useState, useEffect} from 'react';

function App() {

  useEffect( () => {

  } );

  const [displayText, setDisplayText] = useState("");
  
  const btnClick = (text) => {
    if(! (text=="." && displayText.indexOf(".")>=0) )
    {
      setDisplayText(displayText+text);
    }
  }

  const clearText = () => {
    setDisplayText("");
  }

  const clearSingleText = () => {
    if(displayText.length>0)
    {
      var a=displayText;
      var b=a.substring(0,a.length-1);
      setDisplayText(b);
    }
  }

  const calculate= () => {
    var a=eval(displayText);
    setDisplayText(a);
  }

  const getKeyPress = (event) => {
    var key = event.key;
    var keyCode = event.keyCode;

    if(key=="1" || key=="2" || key=="3" || key=="4" || key=="5" || key=="6" || key=="7" || key=="8" || key=="9" || key=="+" || key=="-" || key=="*" || key=="/" || key=="%" || key=="0" || key=="." )
    {
      btnClick(key);
    }
    else if(keyCode==8)
    {
      clearSingleText();
    }
    else if(key=="=" || key=="Enter")
    {
      calculate();
    }
    
  }

  return (
    <div onKeyUp={(e)=>getKeyPress(e)} className="outer">
      <div className="row">
        <div className="col1">
          <input className="input1" onKeyUp={(e)=>getKeyPress(e)} value={displayText} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn1" onClick={clearText} >C</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={clearSingleText}>&larr;</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("%") } >%</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("/") }>/</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("7") }>7</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("8") }>8</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("9") }>9</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("*") } >*</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("4") }>4</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("5") }>5</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("6") }>6</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("-") }>-</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("1") }>1</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("2") }>2</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("3") }>3</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("+") }>+</button>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("0") } >0</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick(".") }>.</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={()=>btnClick("00") } >00</button>
        </div>
        <div className="col">
          <button className="btn1" onClick={calculate}>=</button>
        </div>
      </div>
    </div>
  );

}

export default App;
