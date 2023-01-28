import React from "react";

function Input(props) {

  function handleChange(e) {
    props.callback(props.id, e.target.value);
  }

  return (
    <label>
    <input type='text' value={props.placehold} placeholder={props.display} maxLength="24"
      onChange={handleChange}/></label>
  );
}

export default Input;
