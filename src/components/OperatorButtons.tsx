interface OperatorButtonsProps {
    buttonText : string;
    currentDisplay: string;
    setTheDisplay: (setThis: string) => void;
    setTheFirstNumber: (setThis: string) => void;
    setTheOperator: (setThis: string) => void;
}
const OperatorButtons = ({buttonText, currentDisplay, setTheFirstNumber, setTheOperator, setTheDisplay} : OperatorButtonsProps) => {

    let style = {
        width: "100px",
        height:"100px",
        marginRight:"3px"
    }

    return(
      <button style={style} onClick={() =>{
          setTheFirstNumber(currentDisplay);
          setTheOperator(buttonText);
          setTheDisplay("");
      } }>{buttonText}</button>
    );
}

export default OperatorButtons;