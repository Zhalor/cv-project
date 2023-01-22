import React from "react";

class Input extends React.Component {
  constructor(props){
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.callback(this.props.id, e.target.value);
  }

  
  render() {

    return (
      <label>
      <input type='text' value={this.props.placehold} placeholder={this.props.display} maxLength="24"
        onChange={this.handleChange}/></label>
    );
  }
}

export default Input;
