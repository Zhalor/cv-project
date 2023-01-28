import React, { useState } from "react";
import Header from "./components/header";
import Name from "./components/name";
import Statement from "./components/statement";
import Degree from "./components/degree";
import Job from "./components/job";
import styles from "./styles/styles.css";

function App(props) {

  const [edit, setEdit ] = useState(true);
  
  function handleEdit() {
    edit === true ? setEdit(false) : setEdit(true);
  }


  return (
    <div className='container'>
      <form action="">
        <Header edit={edit} />
        <Name edit={edit} />
        <Statement edit={edit}/>
        <Degree edit={edit} />
        <Job edit={edit}/>
        <button type="button" onClick={handleEdit}>Edit</button>
      </form>
    </div>
  );
}


export default App;
