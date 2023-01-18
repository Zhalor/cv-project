import React from "react";

class Paragraph extends React.Component {
  constructor(props){
    super(props);
  }

  
  render() {

    return (
      <p>{this.props.value}</p>
    );
  }
}

export default Paragraph;