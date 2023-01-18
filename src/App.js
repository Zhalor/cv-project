import React from "react";
import Input from "./components/input";
import Textarea from "./components/textarea";
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
      schoolName: '',
      schoolMajor: '',
      schoolStartEndDate: '',
      companyName: '',
      positionTitle: '',
      jobDuties: '',
      workStartEndDate: '',
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
            </div>
            <div>
            <Input placehold={this.state.schoolName} display='School Name' id='schoolName' callback={this.updateInput}/>
            <Input placehold={this.state.schoolMajor} display='Degree Major' id='schoolMajor' callback={this.updateInput}/>
            <Input placehold={this.state.schoolStartEndDate} display='Start and End Date' id='schoolStartEndDate' callback={this.updateInput}/>
            </div>
            <div>
            <Input placehold={this.state.companyName} display='Company Name' id='companyName' callback={this.updateInput}/>
            <Input placehold={this.state.positionTitle} display='Position Title' id='positionTitle' callback={this.updateInput}/>
            <Textarea placehold={this.state.jobDuties} display='Job Duties' id='jobDuties' callback={this.updateInput}/>
            <Input placehold={this.state.workStartEndDate} display='Start and End Date' id='workStartEndDate' callback={this.updateInput}/>
            </div>
            <button type="button" onClick={this.edit}>Edit</button>
          </form>
        </div>
      );
    } else {
      return (
        <div className='container'>
          <div>
            <Paragraph value={this.state.firstName} />
            <Paragraph value={this.state.lastName}/>
            <Paragraph value={this.state.phoneNumber}/>
            <Paragraph value={this.state.email}/>
          </div>
          <div>
            <Paragraph value={this.state.schoolName} />
            <Paragraph value={this.state.schoolMajor}/>
            <Paragraph value={this.state.schoolStartEndDate}/>
          </div>
          <div>
            <Paragraph value={this.state.companyName}/>
            <Paragraph value={this.state.positionTitle} />
            <Paragraph value={this.state.jobDuties}/>
            <Paragraph value={this.state.workStartEndDate}/>
          </div>
          <button type="button" onClick={this.edit}>Update</button>
        </div>
        );
    }
  }
}

export default App;
