import React from "react";
import PatientsTable from "./PatientsTable";

class PatientList extends React.Component {
  constructor(props) {
    super(props);
    this.handleRowClick = this.handleRowClick.bind(this);
  }
  handleRowClick(){
    console.log(' redundant for now');
  }
  render() {
    return(
      <PatientsTable />
    )

  }

}

export default PatientList;