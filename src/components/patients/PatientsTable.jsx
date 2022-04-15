import { useState } from 'react';
import patientData from './PatientData.json';

function PatientsTable(){
   const [isRowClicked, setRowClicked] = useState(true);
   const users = patientData.patients.map((patient) =>{
      return(
        <tr key={patient.id}>
          <td>{patient.name}</td>
          <td>{patient.emailAddress}</td>
          <td>{patient.phone}</td>
          <td>{patient.address}</td>
          <td>{patient.age}</td>
          <td></td>
       </tr>
      )
   })
   function handleRowClick (){
     setRowClicked(true);
     if(isRowClicked){
       console.log(' this row has been clicked');
     }
   }
  return(
    <div className="mt-4 ml-4 h-full">
    <div>
      Hy there. This is the Patient List view
      <button onClick={handleRowClick}>Click me</button>
      <table >
        <thead>
          <tr>
            <th>Name</th>
            <th>Email Address</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
            {users}
        </tbody>
      </table>
    </div>
  </div>
  )
}
export default PatientsTable;