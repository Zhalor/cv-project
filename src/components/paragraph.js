import React from "react";

class Paragraph extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {

    return (
      <span>{this.props.value}</span>
    );
  }
}

export default Paragraph;