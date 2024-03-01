import { useEffect, useRef, useState } from "react";

const MathOperations = () => {

    const [input, setInput] = useState<string>("");
    const [firstNumber, setFirstNumber] = useState<string>("");
    const [secondNumber,setSecondNumber] = useState<string>("");
    const [operator, setOperator] = useState<string>("");


    /**
     * Checks to see if all state variables have values that are not ""
     * If all have values needed sets input field to return of mathOperation
     */
    useEffect(() => {
        if(firstNumber === "" || secondNumber === "" || operator === ""){
            return;
        }

        setInput(mathOperation(firstNumber, secondNumber, operator));

    },[firstNumber,secondNumber,operator])

    /**
     * Takes 2 numbers and an operator does the math operation returns string
     *
     * @param firstNumber : string
     * @param secondNumber : string
     * @param operator : string
     *
     * @returns string
     */
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

    return (
        <div>
            <p>{ input }</p>
            <div>
                <button onClick={
                    () => {
                        setInput(input + "0");
                    }
                }>
                    0</button>

                 <button onClick={() =>{
                    setInput(input + "1")
                }}>1</button>

                <button onClick={() =>{
                    setInput(input + "2")
                }}>2</button>
                
                <button onClick={() =>{
                    setInput(input + "3")
                }}>3</button>
                
                <button onClick={() =>{
                    setInput(input + "4")
                }}>4</button>
                
                <button onClick={() =>{
                    setInput(input + "5")
                }}>5</button>
                
                <button onClick={() =>{
                    setInput(input + "6")
                }}>6</button>
                
                <button onClick={() =>{
                    setInput(input + "7")
                }}>7</button>
                
                <button onClick={() =>{
                    setInput(input + "8")
                }}>8</button>
                
                <button onClick={() =>{
                    setInput(input + "9")
                }}>9</button>
                
                <button onClick={() =>{
                    setFirstNumber(input);
                    setOperator("+");
                    setInput("");
                }}>+</button>


                <button onClick={() =>{
                    setFirstNumber(input);
                    setOperator("-");
                    setInput("");
                }}>-</button>
                
                <button onClick={() =>{
                    setFirstNumber(input);
                    setOperator("X");
                    setInput("");
                }}>X</button>
                
                <button onClick={() =>{
                    setFirstNumber(input);
                    setOperator("/");
                    setInput("");
                }}>/</button>
                
                <button onClick={() => {
                    setSecondNumber(input);
                }}>=</button>

                <button onClick={() => {
                    setFirstNumber("");
                    setSecondNumber("");
                    setOperator("");
                    setInput("");
                }}>C</button>
            </div>
        </div>
    );
}

export default MathOperations;