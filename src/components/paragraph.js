import React from "react";

class Paragraph extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {

    return (
      <div>{this.props.value}</div>
    );
  }
}

export default Paragraph;