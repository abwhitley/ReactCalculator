import {useState} from "react";

interface DisplayProps {
    displayThis: string;
}

const Display = ({ displayThis }: DisplayProps) => {

    return (
      <>
          <label style={{fontSize:"90px", width:"400px", marginLeft:"15px"}}>{displayThis}</label>
      </>
    );
}

export  default Display;