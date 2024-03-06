import React, {useEffect, useState} from 'react';
import './App.css';
import Button from "./components/Button";
import Display from "./components/Display";
import OperatorButtons from "./components/OperatorButtons";
import EqualButton from "./components/EqualButton";
import NewButton from "./components/NewButton";

const takesString = (value: string) => {
	console.log(value);
}

function App() {
	const [firstNumber, setFirstNumber] = useState("");
	const [secondNumber, setSecondNumber] = useState("");
	const [operator, setOperator] = useState("");
	const [display, setDisplay] = useState("");

	const mathOperation = (firstNumber: string, secondNumber: string, operator: string): string => {
		const firstNumberParsed: number = parseInt(firstNumber);
		const secondNumberParsed: number = parseInt(secondNumber);
		let sum: number = 0;
		let sumParsed: string = "";

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
		if (firstNumber === "" || secondNumber === "" || operator === "") {
			return;
		}

		setDisplay(mathOperation(firstNumber, secondNumber, operator));

	}, [firstNumber, secondNumber, operator])
	return (
		<div className="col" id="my-id" style={{border:"1px solid black", width: 430, marginLeft:10, marginTop:10, backgroundColor: "grey"}}>
            <div style={{marginLeft: 10, marginTop: 10, marginBottom: 10}}>
                <div className="row">
                    <Display displayThis={display}/>
                </div>
                <div className="row">
					<NewButton buttonText="1" currentDisplay={display} setTheDisplay={setDisplay} />
                    {/*<Button buttonText='1' setTheDisplay={setDisplay} currentDisplay={display}/>*/}
                    <NewButton buttonText='2' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton buttonText='3' setTheDisplay={setDisplay} currentDisplay={display}/>
					{/*<NewButton buttonText="X" currentDisplay={display} setTheFirstNumber={setFirstNumber} setTheOperator={setOperator} setTheDisplay={setDisplay} />*/}
                    <NewButton
                        buttonText={"X"}
                        currentDisplay={display}
                        setTheFirstNumber={setFirstNumber}
                        setTheOperator={setOperator}
                        setTheDisplay={setDisplay}/>
                </div>
                <div className="row">
                    <NewButton buttonText='4' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton buttonText='5' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton buttonText='6' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton
                        buttonText={"/"}
                        currentDisplay={display}
                        setTheFirstNumber={setFirstNumber}
                        setTheOperator={setOperator}
                        setTheDisplay={setDisplay}
                    />
                </div>
                <div className="row">
                    <NewButton buttonText='7' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton buttonText='8' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton buttonText='9' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton
                        buttonText={"-"}
                        currentDisplay={display}
                        setTheFirstNumber={setFirstNumber}
                        setTheOperator={setOperator}
                        setTheDisplay={setDisplay}
                    />
                </div>
                <div className="row">
                    <NewButton buttonText='.' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton buttonText='0' setTheDisplay={setDisplay} currentDisplay={display}/>
                    <NewButton
                        buttonText={"="}
                        currentDisplay={display}
                        setTheSecondNumber={setSecondNumber}/>
                    <NewButton
                        buttonText={"+"}
                        currentDisplay={display}
                        setTheFirstNumber={setFirstNumber}
                        setTheOperator={setOperator}
                        setTheDisplay={setDisplay}
                    />
			    </div>
		    </div>
		</div>
	);
}

export default App;
