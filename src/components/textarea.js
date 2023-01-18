import React from "react";

class Textarea extends React.Component {
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
        <textarea value={this.props.placehold} id={this.props.id}
         onChange={this.handleChange}/>
      </div>
    );
  }
}

export default Textarea;
