import React from "react";
import Input from "./input";
import Paragraph from "./paragraph";

class Name extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      fullName: '',
    }

    this.updateName = this.updateName.bind(this);
  }

  updateName(stateField, value) {
    this.setState({
      [stateField]: value,
    });
  }

  
  render() {
    if(this.props.edit) {
      return (
        <div className="name">
          <Input placehold={this.state.fullName} display='Full Name' id='fullName' callback={this.updateName}/>
        </div>
      );
    } else {
      return (
        <div className="name">
          <Paragraph value={this.state.fullName} />
        </div>
      );
    }
  }
}

export default Name;
