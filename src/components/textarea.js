import React from "react";

function Textarea(props) {

  function handleChange(e) {
    props.callback(props.id, e.target.value);
  }

  return (
    <div>
      <label htmlFor={props.id}></label>
      <textarea value={props.placehold} placeholder={props.display} id={props.id} maxLength="800"
        onChange={handleChange}/>
    </div>
  );
}

export default Textarea;
