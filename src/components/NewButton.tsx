interface NewButtonsProps {
	buttonText : string;
	currentDisplay: string;
	setTheDisplay?: (setThis: string) => void;
	setTheFirstNumber?: (setThis: string) => void;
	setTheSecondNumber?: (setThis: string) => void;
	setTheOperator?: (setThis: string) => void;
}

const NewButton = ({buttonText, currentDisplay, setTheDisplay, setTheFirstNumber, setTheSecondNumber, setTheOperator}: NewButtonsProps)  => {
	return (
		<>
		</>
	);
}

export default NewButton;