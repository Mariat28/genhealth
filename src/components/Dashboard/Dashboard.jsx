import React from "react";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiHeartPulseLine } from 'react-icons/ri';
import AppointmentListItem from "./AppointmentListItem";
import NextPatient from "./NextPatientItem";
import AppointmentRequest from "./AppointmentRequests";
import MonthlyStatistics from "./MonthlyStatistics";
import CardComponent from "./CardComponent";
import '../../App.css';
function DashboardContent() {
  return(
    <div className=" ml-4 w-full  mainContent">
      {/* metrics row  */}
      <div className="grid lg:grid-cols-4 grid-cols-1  h-fit mr-3">
        <CardComponent icon={<HiOutlineUserGroup className="w-8 h-8 font-bold text-purple-500"></HiOutlineUserGroup>} title="Patients" statistic="600"></CardComponent>
        <CardComponent icon={<MdAttachMoney className="text-red-500 w-8 h-8 font-bold "></MdAttachMoney>} title="Income" statistic="12,500"></CardComponent>
        <CardComponent icon={<AiOutlineCalendar className="text-green-600 w-8 h-8 font-bold "></AiOutlineCalendar>} title="Appointments" statistic="211"></CardComponent>
        <CardComponent icon={<RiHeartPulseLine className="text-red-500 w-8 h-8 font-bold "></RiHeartPulseLine>} title="Treatments" statistic="402"></CardComponent>
      </div>
      {/* upcoming Appointments */}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-3">
        <div className="mr-3">
          <span className="font-semibold text-slate-600 lg:text-sm ">Today's Appointments</span>
          <AppointmentListItem/>
        </div>
        <div className="ml-1 mr-3 lg:mr-0">
          <span className="font-semibold text-slate-600 lg:text-sm">Current Patient Details</span>
          <NextPatient/>
        </div>
      </div>
      {/* appointment requests  */}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-3 ">
        <div>
          <div className="flex justify-between mr-3 ">
            <span className="font-semibold text-slate-600 lg:text-sm">Appointments Requests</span>
            <span className="font-semibold text-blue-400 cursor-pointer text-sm">See All</span>
          </div>
          <div className=" h-full max-h-full bg-white overflow-x-hidden overflow-y-auto mainContent">
            <AppointmentRequest/>
          </div>
        </div>
        
        <div className="ml-1 mr-3 lg:mr-0">
          <span className="font-semibold text-slate-600 lg:text-sm">Performance Statistics</span>
          <MonthlyStatistics/>
        </div>
      </div>

    </div>
  )
  
}
export default DashboardContent;