interface EqualButtonProps {
    buttonText: string;
    currentDisplay: string;
    setTheSecondNumber: (setThis: string) => void;
}
const EqualButton = ({buttonText,currentDisplay, setTheSecondNumber} : EqualButtonProps) => {

    let style = {
        width: "100px",
        height:"100px",
        marginRight:"3px"
    }

    return (
        <button style={style} onClick={() => {
            setTheSecondNumber(currentDisplay)
        }}>{buttonText}</button>
    )
}

export default EqualButton;