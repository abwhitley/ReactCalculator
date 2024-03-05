import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Display from "./components/Display";
import OperatorButtons from "./components/OperatorButtons";
import EqualButton from "./components/EqualButton";

const takesString = (value: string) => {
  console.log(value);
}

function App() {
    const [firstNumber, setFirstNumber] = useState("");
    const [secondNumber, setSecondNumber] = useState("");
    const [operator, setOperator] = useState("");
    const [display, setDisplay] = useState("");

    const mathOperation = (firstNumber: string, secondNumber: string, operator: string) : string => {
        const firstNumberParsed: number = parseInt(firstNumber);
        const secondNumberParsed: number = parseInt(secondNumber);
        let sum: number  = 0;
        let sumParsed : string = "";

        if (operator === "+") {
            sum = firstNumberParsed + secondNumberParsed;
            sumParsed = sum.toString();
            return sumParsed;
        } else if (operator === "-") {
            sum = firstNumberParsed - secondNumberParsed;
            sumParsed = sum.toString();
            return sumParsed;
        } else if (operator === "X") {
            sum = firstNumberParsed * secondNumberParsed;
            sumParsed = sum.toString();
            return sumParsed;
        } else if (operator === "/") {
            sum = firstNumberParsed / secondNumberParsed;
            sumParsed = sum.toString();
            return sumParsed;
        }

        return "Something Wrong";
    }

    useEffect(() => {
        if(firstNumber === "" || secondNumber === "" || operator === ""){
            return;
        }

        setDisplay(mathOperation(firstNumber, secondNumber, operator));

    },[firstNumber,secondNumber,operator])
  return (
      <div className="col">
        <div className="row">
          <Display displayThis={display}/>
        </div>
          <div className="row">
              <Button  buttonText='1' setTheDisplay={setDisplay} currentDisplay={display}  />
              <Button  buttonText='2'  setTheDisplay={setDisplay} currentDisplay={display}/>
              <Button  buttonText='3'  setTheDisplay={setDisplay} currentDisplay={display}/>
              <OperatorButtons buttonText={"X"} currentDisplay={display} setTheFirstNumber={setFirstNumber} setTheOperator={setOperator} setTheDisplay={setDisplay}/>
          </div>
          <div className="row">
              <Button  buttonText='4' setTheDisplay={setDisplay} currentDisplay={display}/>
              <Button  buttonText='5' setTheDisplay={setDisplay} currentDisplay={display}/>
              <Button  buttonText='6' setTheDisplay={setDisplay} currentDisplay={display}/>
              <OperatorButtons buttonText={"/"} currentDisplay={display} setTheFirstNumber={setFirstNumber} setTheOperator={setOperator} setTheDisplay={setDisplay}/>
          </div>
          <div className="row">
              <Button  buttonText='7' setTheDisplay={setDisplay} currentDisplay={display}/>
              <Button  buttonText='8' setTheDisplay={setDisplay} currentDisplay={display}/>
              <Button  buttonText='9' setTheDisplay={setDisplay} currentDisplay={display}/>
              <OperatorButtons buttonText={"-"} currentDisplay={display} setTheFirstNumber={setFirstNumber} setTheOperator={setOperator} setTheDisplay={setDisplay} />
          </div>
          <div className="row">
              <Button  buttonText='.' setTheDisplay={setDisplay} currentDisplay={display}/>
              <Button  buttonText='0' setTheDisplay={setDisplay} currentDisplay={display}/>
              <EqualButton buttonText={"="} currentDisplay={display} setTheSecondNumber={setSecondNumber} />
              <OperatorButtons buttonText={"+"} currentDisplay={display} setTheFirstNumber={setFirstNumber} setTheOperator={setOperator} setTheDisplay={setDisplay}/>
          </div>
      </div>
  );
}

export default App;
