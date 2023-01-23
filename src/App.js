import React from "react";
import Header from "./components/header";
import Name from "./components/name";
import Statement from "./components/statement";
import Degree from "./components/degree";
import Job from "./components/job";
import styles from "./styles/styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true,
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
      return (
        <div className='container'>
          <form action="">
            <Header edit={this.state.edit} />
            <Name edit={this.state.edit} />
            <Statement edit={this.state.edit}/>
            <Degree edit={this.state.edit} />
            <Job edit={this.state.edit}/>
            <button type="button" onClick={this.edit}>Edit</button>
          </form>
        </div>
      );
  }
}

export default App;
