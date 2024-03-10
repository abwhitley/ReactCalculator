interface NewButtonsProps {
	buttonText: string;
	currentDisplay: string;
	setTheDisplay?: (setThis: string) => void;
	setTheFirstNumber?: (setThis: string) => void;
	setTheSecondNumber?: (setThis: string) => void;
	setTheOperator?: (setThis: string) => void;
}

const NewButton = ({
					   buttonText,
					   currentDisplay,
					   setTheDisplay,
					   setTheFirstNumber,
					   setTheSecondNumber,
					   setTheOperator
				   }: NewButtonsProps) => {
	let styleNormalButton = {
		width: "100px",
		height: "100px",
		marginRight: "3px"

	}

	let styleLongButton = {
		width: "203px",
		height: "100px",
		marginRight: "3px"
	}

	if (buttonText !== "<-" && setTheFirstNumber === undefined && setTheSecondNumber === undefined && setTheDisplay !== undefined && setTheOperator === undefined) {
		return (
			<div>
				<button className="button" style={styleNormalButton} onClick={() =>
					setTheDisplay(currentDisplay + `${buttonText}`)
				}
				>{buttonText}</button>
			</div>
		);
	} else if (setTheFirstNumber !== undefined && setTheSecondNumber === undefined && setTheDisplay !== undefined && setTheOperator !== undefined) {
		return (
			<button className="button" style={ styleNormalButton } onClick={() => {
				setTheFirstNumber(currentDisplay);
				setTheOperator(buttonText);
				setTheDisplay("");
			}}>{ buttonText }</button>
		);
	} else if (setTheFirstNumber === undefined && setTheSecondNumber !== undefined && setTheOperator === undefined && setTheDisplay === undefined) {
		return (
			<button className="button" style={styleNormalButton} onClick={() => {
				setTheSecondNumber(currentDisplay)
			}}>{buttonText}</button>
		)
	} else if (buttonText === "clear" && setTheDisplay !== undefined && setTheFirstNumber !== undefined && setTheSecondNumber !== undefined && setTheOperator !== undefined) {
		return (
			<button className="button" style={styleLongButton} onClick={() => {
				setTheDisplay("");
				setTheFirstNumber("");
				setTheSecondNumber("");
			}}>{buttonText}</button>
		);
	} else if (buttonText === "<-" && setTheDisplay !== undefined && setTheSecondNumber === undefined && setTheFirstNumber === undefined && setTheOperator === undefined) {
		return (
			<button className="button" style={styleLongButton} onClick={() => {
				setTheDisplay(currentDisplay.substring(0, currentDisplay.length - 1));
			}}>{buttonText}</button>
		);
	} else {
		return (
			<></>
		);
	}
}

export default NewButton;