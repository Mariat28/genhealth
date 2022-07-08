import { useState } from 'react';
import patientData from './PatientData.json';
import './patients.css';

const PatientsTable = () => {
   const [isRowClicked, setRowClicked] = useState(true);
   const users = patientData.patients.map((patient) =>{
      return(
        <div className='grid grid-cols-6 gap-2 py-3 px-1 hover:shadow-md cursor-pointer text-sm text-slate-800' onClick={handleRowClick}>
        <div className='col-span-1 flex gap-2 items-center'>
          <div className='w-8 h-8 bg-blue-100 rounded-md flex justify-center items-center p-2 font-bold text-blue-900 uppercase'>
          {patient.name[0]}{patient.last_name[0]}
          </div>
          {patient.name} {patient.last_name}
        </div>
        <div className='col-span-2'>
        {patient.emailAddress}
        </div>
        <div className='col-span-1'>
          {patient.phone}
        </div>
        <div className='col-span-1'>
        {patient.address}
        </div>
        <div className='col-span-1'>
          Action
        </div>

      </div>
      )
   })
   const handleRowClick = () => {
     setRowClicked(true);
     if(isRowClicked){
       console.log(' this row has been clicked');
     }
   }
  return(
    <div className="mt-4 ml-4 mr-4 h-fit shadow-md rounded-sm bg-slate-100 p-2">
      <div className='grid grid-cols-6 py-3 border-b font-semibold text-slate-800'>
        <div className='col-span-1'>
          Name
        </div>
        <div className='col-span-2'>
          Email Address
        </div>
        <div className='col-span-1'>
          Contact
        </div>
        <div className='col-span-1'>
          Address
        </div>
        <div className='col-span-1'>
          Action
        </div>

      </div>
      {users}
    </div>
  )
}
export default PatientsTable;