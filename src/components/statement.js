import React, { useState } from "react";
import Textarea from "./textarea";
import Paragraph from "./paragraph";

function Statement(props) {

  const [statement, setStatement] = useState('');

  function updateStatement(stateField, value) {
    setStatement(value);
  }

  if(props.edit) {
    return (
      <div className="statement">
        <p>PROFESSIONAL STATEMENT</p>
        <div>
          <Textarea placehold={statement} display='Professional Statement' id='statement' callback={updateStatement} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="statement">
        <p>PROFESSIONAL STATEMENT</p>
        <div>
          <Paragraph value={statement} />
        </div>
      </div>
    );
  }
}

export default Statement;
