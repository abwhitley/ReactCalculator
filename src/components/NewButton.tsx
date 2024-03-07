interface NewButtonsProps {
	buttonText : string;
	currentDisplay: string;
	setTheDisplay?: (setThis: string) => void;
	setTheFirstNumber?: (setThis: string) => void;
	setTheSecondNumber?: (setThis: string) => void;
	setTheOperator?: (setThis: string) => void;
}

const backSpace = (currentDisplay : string) => {

	let arrayLength : number = currentDisplay.length
	console.log(`arraylength: ${arrayLength}`)
	let charArray : string[] = currentDisplay.split('');


	console.log(`charArray is: ${charArray}`)

	charArray.splice(arrayLength-1, 1);

	// console.log(`newString ${charArray.toString()}`)

	let newString : string = "";
	for (let i = 0; i < charArray.length-2; i++){
		newString += charArray[i];
		console.log(newString);
	}

	return  newString;

}

const NewButton = ({buttonText, currentDisplay, setTheDisplay, setTheFirstNumber, setTheSecondNumber, setTheOperator}: NewButtonsProps)  => {
	let styleNormalButton = {
		width: "100px",
		height:"100px",
		marginRight:"3px"

	}

	let styleLongButton = {
		width: "203px",
		height: "100px",
		marginRight: "3px"
	}

	if(buttonText !== "<-" && setTheFirstNumber === undefined && setTheSecondNumber === undefined && setTheDisplay !== undefined && setTheOperator === undefined) {
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
			<button style={styleNormalButton} onClick={() => {
				setTheFirstNumber(currentDisplay);
				setTheOperator(buttonText);
				setTheDisplay("");
			}}>{buttonText}</button>
		);
	}else if(setTheFirstNumber === undefined && setTheSecondNumber !== undefined && setTheOperator === undefined && setTheDisplay === undefined){
		return (
			<button style={styleNormalButton} onClick={() => {
				setTheSecondNumber(currentDisplay)
			}}>{buttonText}</button>
		)
	} else if(buttonText === "clear" && setTheDisplay !== undefined && setTheFirstNumber !== undefined && setTheSecondNumber !== undefined && setTheOperator !== undefined) {
		return (
			<button style={styleLongButton} onClick={() => {
				setTheDisplay("");
				setTheFirstNumber("");
				setTheSecondNumber("");
			}}>{buttonText}</button>
		);
	}else if(buttonText === "<-" && setTheDisplay !== undefined && setTheSecondNumber === undefined && setTheFirstNumber === undefined && setTheOperator === undefined){
		return (
			<button style={styleLongButton} onClick={() => {
				setTheDisplay(backSpace(currentDisplay));
			}}>{buttonText}</button>
		);
	} else{
		return (
			<></>
		);
	}
}

export default NewButton;