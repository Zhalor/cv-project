import React, { useState } from "react";
import Input from "./input";
import Paragraph from "./paragraph";

function Degree(props) {
  
  const [school, setSchool] = useState({
    schoolName: '',
    schoolLocation: '',
    schoolMajor: '',
    schoolStartEndDate: ''
  });

  function updateDegree(stateField, value) {
    setSchool({
      ...school,
      [stateField]: value,
    });
  }
  
  if(props.edit) {
    return (
      <div className="education">
        <p>EDUCATION</p>
        <div>
          <div>
            <Input placehold={school.schoolName} display='School Name' id='schoolName' callback={updateDegree}/>
            <Input placehold={school.schoolLocation} display='School Location' id='schoolLocation' callback={updateDegree}/>
          </div>
          <div>
            <Input placehold={school.schoolMajor} display='Degree Major' id='schoolMajor' callback={updateDegree}/>
            <Input placehold={school.schoolStartEndDate} display='Start and End Date' id='schoolStartEndDate' callback={updateDegree}/>
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
            <Paragraph value={school.schoolName} />{", "}
            <Paragraph value={school.schoolLocation} />
          </div>
          <div>
            <Paragraph value={school.schoolMajor} />{", "}
            <Paragraph value={school.schoolStartEndDate} />
          </div>
        </div>
      </div>
    );
  }
}

export default Degree;
