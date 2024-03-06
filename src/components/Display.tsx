import {useState} from "react";

interface DisplayProps {
    displayThis: string;
}

const Display = ({ displayThis }: DisplayProps) => {

    const styles = {
        fontSize: 45,
        width:"408px",
        height: 75,
        // border:"1px solid red",
        // whiteSpace: 'nowrap',
        // overflow: 'hidden',
        //
        backgroundColor: "white",
        color: "black",
        display: "flex",
        justifyContent: "flex-end",
        border: "1px solid black"
    }

    return (
        <label style={styles}>{displayThis}</label>
    );
}

export  default Display;