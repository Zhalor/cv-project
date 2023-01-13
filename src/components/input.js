import React from "react";

class Input extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {

    return (
      <div>
        <label htmlFor={this.props.data}>{this.props.data}</label>
        <input type='text' id={this.props.data}/>
      </div>
    );
  }
}

export default Input;
