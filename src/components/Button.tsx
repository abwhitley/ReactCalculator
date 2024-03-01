
interface ButtonProps {
    buttonText: string;
    display: string;
    checkHandler
}
const Button = ({ buttonText, onButtonClick, display}: ButtonProps) => {

    let style = {
        width: "100px",
        height:"100px",
        marginRight:"3px"

    }

    return (
        <div>
            <button className="button" style={style} onClick={() =>
                set
            }
            >{ buttonText }</button>
        </div>
    );
}

export default Button;


//this was a portion of the above return when the button is clicked.
//Originally this was used to send a function in i need to do more research
// before tackling this

