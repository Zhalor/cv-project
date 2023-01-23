import React from "react";
import Input from "./input";
import Paragraph from "./paragraph";

class Degree extends React.Component {
  constructor(props){
    super(props);

    this.state = ({
      schoolName: '',
      schoolLocation: '',
      schoolMajor: '',
      schoolStartEndDate: '',
    });
  
    this.updateDegree = this.updateDegree.bind(this);
  }

  updateDegree(stateField, value) {
    this.setState({
      [stateField]: value,
    });
  }

  
  render() {
    if(this.props.edit) {
      return (
        <div className="education">
          <p>EDUCATION</p>
          <div>
            <div>
              <Input placehold={this.state.schoolName} display='School Name' id='schoolName' callback={this.updateDegree}/>
              <Input placehold={this.state.schoolLocation} display='School Location' id='schoolLocation' callback={this.updateDegree}/>
            </div>
            <div>
              <Input placehold={this.state.schoolMajor} display='Degree Major' id='schoolMajor' callback={this.updateDegree}/>
              <Input placehold={this.state.schoolStartEndDate} display='Start and End Date' id='schoolStartEndDate' callback={this.updateDegree}/>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="education">
          <p>EDUCATION</p>
          <div>
            <div>
              <Paragraph value={this.state.schoolName} />{", "}
              <Paragraph value={this.state.schoolLocation} />
            </div>
            <div>
              <Paragraph value={this.state.schoolMajor} />{", "}
              <Paragraph value={this.state.schoolStartEndDate} />
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Degree;
