import React from "react";
import Textarea from "./textarea";
import Paragraph from "./paragraph";

class Statement extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      statement: '',
    }

    this.updateStatement = this.updateStatement.bind(this);
  }

  updateStatement(stateField, value) {
    this.setState({
      [stateField]: value,
    });
  }

  
  render() {
    if(this.props.edit) {
      return (
        <div className="statement">
          <p>PROFESSIONAL STATEMENT</p>
          <div>
            <Textarea placehold={this.state.statement} display='Professional Statement' id='statement' callback={this.updateStatement} />
          </div>
        </div>
      );
    } else {
      return (
        <div className="statement">
          <p>PROFESSIONAL STATEMENT</p>
          <div>
            <Paragraph value={this.state.statement} />
          </div>
        </div>
      );
    }
  }
}

export default Statement;
