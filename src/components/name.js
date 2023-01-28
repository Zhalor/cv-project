import React, { useState } from "react";
import Input from "./input";
import Paragraph from "./paragraph";

function Name(props) {

  const [fullName, setFullName] = useState('');

  function UpdateFullName(stateField, value) {
    setFullName(value);
  }
  
  if(props.edit) {
    return (
      <div className="name">
        <Input placehold={fullName} display='Full Name' id='fullName' callback={UpdateFullName}/>
      </div>
    );
  } else {
    return (
      <div className="name">
        <Paragraph value={fullName} />
      </div>
    );
  }
}

export default Name;
