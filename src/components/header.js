import React, { useState } from "react";
import Input from "./input";
import Paragraph from "./paragraph";

function Header(props) {

    const [header, setHeader] = useState({
      location: '',
      phoneNumber: '',
      email: '',
    });

  function updateHeader(stateField, value) {
    setHeader({
      ...header,
      [stateField]: value,
    });
  }

  if(props.edit) {
    return (
      <div className="header">
        <Input placehold={header.location} display='Location' id='location' callback={updateHeader}/>
        <Input placehold={header.phoneNumber} display='Phone Number' id='phoneNumber' callback={updateHeader}/>
        <Input placehold={header.email} display='Email Address' id='email' callback={updateHeader}/>
      </div>
    );
  } else {
    return (
      <div className="header">
        <Paragraph value={header.location} />
        <Paragraph value={header.phoneNumber} />
        <Paragraph value={header.email} />
      </div>
    );
  }
}

export default Header;
