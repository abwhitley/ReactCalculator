interface NewButtonsProps {
	buttonText : string;
	currentDisplay: string;
	setTheDisplay?: (setThis: string) => void;
	setTheFirstNumber?: (setThis: string) => void;
	setTheSecondNumber?: (setThis: string) => void;
	setTheOperator?: (setThis: string) => void;
}

const NewButton = ({buttonText, currentDisplay, setTheDisplay, setTheFirstNumber, setTheSecondNumber, setTheOperator}: NewButtonsProps)  => {
	let style = {
		width: "100px",
		height:"100px",
		marginRight:"3px"

	}

	if(setTheFirstNumber === undefined && setTheSecondNumber === undefined && setTheDisplay !== undefined && setTheOperator === undefined) {
		return (
			<div>
				<button className="button" style={style} onClick={() =>
					setTheDisplay(currentDisplay + `${buttonText}`)
				}
				>{buttonText}</button>
			</div>
		);
	} else if (setTheFirstNumber !== undefined && setTheSecondNumber === undefined && setTheDisplay !== undefined && setTheOperator !== undefined) {
		return (
			<button style={style} onClick={() => {
				setTheFirstNumber(currentDisplay);
				setTheOperator(buttonText);
				setTheDisplay("");
			}}>{buttonText}</button>
		);
	}else if(setTheFirstNumber === undefined && setTheSecondNumber !== undefined && setTheOperator === undefined && setTheDisplay === undefined){
		return (
			<button style={style} onClick={() => {
				setTheSecondNumber(currentDisplay)
			}}>{buttonText}</button>
		)
	} else {
		return (
			<></>
		);
	}
}

export default NewButton;