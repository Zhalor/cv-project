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
      <div>
        <label htmlFor={this.props.id}>{this.props.display}</label>
        <input type='text' value={this.props.placehold} id={this.props.id}
         onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Input;
