import React from "react";
import Input from "./input";
import Textarea from "./textarea";
import Paragraph from "./paragraph";

class Job extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      companyName: '',
      companyLocation: '',
      positionTitle: '',
      jobDuties: '',
      workStartEndDate: '',
    });
  
    this.updateJob = this.updateJob.bind(this);
  }

  updateJob(stateField, value) {
    this.setState({
      [stateField]: value,
    });
  }

  
  render() {
    if(this.props.edit) {
      return (
        <div className="work-experience">
          <p>WORK EXPERIENCE</p>
          <div>
            <div>
              <Input placehold={this.state.positionTitle} display='Position Title' id='positionTitle' callback={this.updateJob}/>
              <Input placehold={this.state.workStartEndDate} display='Start and End Date' id='workStartEndDate' callback={this.updateJob}/>
            </div>
            <div>
              <Input placehold={this.state.companyName} display='Company Name' id='companyName' callback={this.updateJob}/>
              <Input placehold={this.state.companyLocation} display='Company Location' id='companyLocation' callback={this.updateJob}/>
            </div>
            <Textarea placehold={this.state.jobDuties} display='Job Duties' id='jobDuties' callback={this.updateJob}/>
          </div>
        </div>
      );
    } else {
      return (
        <div className="work-experience">
          <p>WORK EXPERIENCE</p>
          <div>
            <div>
              <Paragraph value={this.state.positionTitle} />{", "}
              <Paragraph value={this.state.workStartEndDate} />
            </div>
            <div>
              <Paragraph value={this.state.companyName} />{", "}
              <Paragraph value={this.state.companyLocation} />
            </div>
            <Paragraph value={this.state.jobDuties} />
          </div>
        </div>
      );
    }
  }
}

export default Job;
