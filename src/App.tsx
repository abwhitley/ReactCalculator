import React, {useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Display from "./components/Display";

const takesString = (value: string) => {
  console.log(value);
}

function App() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [display, setDisplay] = useState("");

  return (
      <div className="col">
        <div className="row">
          <Display userInput="200"/>
        </div>
          <div className="row">
              <Button  buttonText='1' onButtonClick={setDisplay} display={display}  />
              <Button  buttonText='2'  onButtonClick={setDisplay}/>
              <Button  buttonText='3'  onButtonClick={setDisplay}/>
              <Button  buttonText='<-' onButtonClick={setDisplay}/>
          </div>
          <div className="row">
              <Button  buttonText='4' onButtonClick={setDisplay}/>
              <Button  buttonText='5' onButtonClick={setDisplay}/>
              <Button  buttonText='6' onButtonClick={setDisplay}/>
              <Button  buttonText='/' onButtonClick={setDisplay}/>
          </div>
          <div className="row">
              <Button  buttonText='7' onButtonClick={setDisplay}/>
              <Button  buttonText='8' onButtonClick={setDisplay}/>
              <Button  buttonText='9' onButtonClick={setDisplay}/>
              <Button  buttonText='-' onButtonClick={setDisplay}/>
          </div>
          <div className="row">
              <Button  buttonText='.' onButtonClick={setDisplay}/>
              <Button  buttonText='0' onButtonClick={setDisplay}/>
              <Button  buttonText='=' onButtonClick={setDisplay}/>
              <Button  buttonText='+' onButtonClick={setDisplay}/>
          </div>
      </div>
  );
}

export default App;
