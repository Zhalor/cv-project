import React from "react";
import Input from "./input";
import Paragraph from "./paragraph";

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      location: '',
      phoneNumber: '',
      email: '',
    }

    this.updateHeader = this.updateHeader.bind(this);
  }

  updateHeader(stateField, value) {
    this.setState({
      [stateField]: value,
    });
  }

  
  render() {
    if(this.props.edit) {
      return (
        <div className="header">
          <Input placehold={this.state.location} display='Location' id='location' callback={this.updateHeader}/>
          <Input placehold={this.state.phoneNumber} display='Phone Number' id='phoneNumber' callback={this.updateHeader}/>
          <Input placehold={this.state.email} display='Email Address' id='email' callback={this.updateHeader}/>
        </div>
      );
    } else {
      return (
        <div className="header">
          <Paragraph value={this.state.location} />
          <Paragraph value={this.state.phoneNumber} />
          <Paragraph value={this.state.email} />
        </div>
      );
    }
  }
}

export default Header;
