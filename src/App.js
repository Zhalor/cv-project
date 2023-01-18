import React from "react";
import Input from "./components/input";
import Paragraph from "./components/paragraph";
import styles from "./styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true,
      firstName: '',
      lastName: '',
      phoneNumber: '',
      email: '',
    }

    this.edit = this.edit.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }
  
  edit() {
    this.state.edit === true ? this.setState({edit: false,}) : this.setState({edit: true,});
  }

  updateInput(stateField, value) {
    this.setState({
      [stateField]: value,
    });
  }

  render() {
    if(this.state.edit) {
      return (
        <div className='container'>
          <form>
            <div>
            <Input placehold={this.state.firstName} display='First Name' id='firstName' callback={this.updateInput}/>
            <Input placehold={this.state.lastName} display='Last Name' id='lastName' callback={this.updateInput}/>
            <Input placehold={this.state.phoneNumber} display='Phone Number' id='phoneNumber' callback={this.updateInput}/>
            <Input placehold={this.state.email} display='Email Address' id='email' callback={this.updateInput}/>
            <button type="button" onClick={this.edit}>Edit</button>
            </div>
            <div>

            </div>
          </form>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <form>
            <div>
            <Paragraph value={this.state.firstName} />
            <Paragraph value={this.state.lastName}/>
            <Paragraph value={this.state.phoneNumber}/>
            <Paragraph value={this.state.email}/>
            <button type="button" onClick={this.edit}>Update</button>
            </div>
            <div>

            </div>
          </form>
        </div>
        );
    }
  }
}

export default App;
