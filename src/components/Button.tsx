
interface ButtonProps {
    buttonText: string;
    currentDisplay: string;
    setTheDisplay: (setThis: string) => void;
}
const Button = ({ buttonText, currentDisplay, setTheDisplay}: ButtonProps) => {

    let style = {
        width: "100px",
        height:"100px",
        marginRight:"3px"

    }

    return (
        <div>
            <button className="button" style={style} onClick={() =>
                setTheDisplay(currentDisplay + `${ buttonText }`)
            }
            >{ buttonText }</button>
        </div>
    );
}

export default Button;


//this was a portion of the above return when the button is clicked.
//Originally this was used to send a function in i need to do more research
// before tackling this

