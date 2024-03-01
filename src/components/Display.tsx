import {useState} from "react";

interface DisplayProps {
    userInput: string;
}

const Display = ({ userInput }: DisplayProps) => {

    return (
      <>
          <label style={{fontSize:"90px", width:"400px", marginLeft:"15px"}}>{userInput}</label>
      </>
    );
}

export  default Display;