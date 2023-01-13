import React from "react";
import Input from "./components/input";
import Paragraph from "./components/paragraph";
import styles from "./styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true,
    }

    this.edit = this.edit.bind(this);
  }
  
  edit() {
    this.state.edit === true ? this.setState({edit: false,}) : this.setState({edit: true,})
  }

  render() {

    let value;
    let btnText;
    if(this.state.edit) {
      value = <Input data='Name'/>
      btnText = 'Edit';
    } else {
      value = <Paragraph />
      btnText = 'Confirm';
    }


    return (
      <div className='container'>
        <form>
          {value}
          {value}
          {value}
          {value}

          <button type="button" onClick={this.edit}>{btnText}</button>


        </form>
      </div>
    );
  }
}

export default App;
