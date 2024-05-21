import logo from './logo.svg';
import './App.css';
import {useState} from 'react';




function App({text}) {

console.log(text)

    let[value , setValue] = useState(0)
    
    let add =()=>{
       if (value!=20) {
        setValue(value += 1);
        setValue(value += 1);
        setValue(value += 1);
        setValue(value += 1);
       }
    }

    let remove = () =>{
      if (value!=0) {
        setValue(value-1);
       }
    }

  return (
    <div className="App">
     
       <div className="counterapp">
          <h1>COUNTER APP</h1>
          <h3>Count Value : {value}</h3>
          <h6>{text}</h6>
          <div className="btn">
          <button className="up" onClick={add}>ADD</button>
          <button className="down" onClick={remove}>REMOVE</button>
          </div>
       </div>

    </div>
  );
}

export default App;
