import React, { useState } from "react";
import Input from "./input";
import Textarea from "./textarea";
import Paragraph from "./paragraph";

function Job(props) {

    const [degree, setDegree] = useState({
      companyName: '',
      companyLocation: '',
      positionTitle: '',
      jobDuties: '',
      workStartEndDate: '',
    });

  function updateJob(stateField, value) {
    setDegree({
      ...degree,
      [stateField]: value,
    });
  }
  
  if(props.edit) {
    return (
      <div className="work-experience">
        <p>WORK EXPERIENCE</p>
        <div>
          <div>
            <Input placehold={degree.positionTitle} display='Position Title' id='positionTitle' callback={updateJob}/>
            <Input placehold={degree.workStartEndDate} display='Start and End Date' id='workStartEndDate' callback={updateJob}/>
          </div>
          <div>
            <Input placehold={degree.companyName} display='Company Name' id='companyName' callback={updateJob}/>
            <Input placehold={degree.companyLocation} display='Company Location' id='companyLocation' callback={updateJob}/>
          </div>
          <Textarea placehold={degree.jobDuties} display='Job Duties' id='jobDuties' callback={updateJob}/>
        </div>
      </div>
    );
  } else {
    return (
      <div className="work-experience">
        <p>WORK EXPERIENCE</p>
        <div>
          <div>
            <Paragraph value={degree.positionTitle} />{", "}
            <Paragraph value={degree.workStartEndDate} />
          </div>
          <div>
            <Paragraph value={degree.companyName} />{", "}
            <Paragraph value={degree.companyLocation} />
          </div>
          <Paragraph value={degree.jobDuties} />
        </div>
      </div>
    );
  }
}

export default Job;
