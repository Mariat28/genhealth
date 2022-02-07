import React from "react";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiHeartPulseLine } from 'react-icons/ri';
import AppointmentListItem from "./AppointmentListItem";
import NextPatient from "./NextPatientItem";
import AppointmentRequest from "./AppointmentRequests";
import MonthlyStatistics from "./MonthlyStatistics";
function DashboardContent() {
  return(
    <div className=" ml-4 w-full  mainContent">
      {/* metrics row  */}
      <div className="grid lg:grid-cols-4 grid-cols-1  h-fit mr-3">
        <div className="rounded shadow bg-white h-36  flex justify-start mb-3 lg:mb-0 mr-8 lg:mr-3">
          <div className="flex justify-center  items-center ml-6">
            <div className=" flex justify-center items-center  bg-blue-50 p-2 h-10 w-10 rounded-lg">
              <HiOutlineUserGroup className="w-8 h-8 font-bold text-purple-500" />
            </div>
            <div className="flex flex-col justify-center ml-3">
              <span className="font-semibold text-slate-600">Patients</span>
              <span className="text-4xl text-blue-900 font-semibold lg:text-3xl">600</span>
            </div>
          </div>
        </div>
        <div className="rounded shadow bg-white h-36  flex justify-start mb-3 lg:mb-0  mr-8 lg:mr-3">
          <div className="flex justify-center  items-center ml-6">
            <div className=" flex justify-center items-center  bg-blue-50 p-2 h-10 w-10 rounded-lg">
              <MdAttachMoney className="text-red-500 w-8 h-8 font-bold " />
            </div>
            <div className="flex flex-col justify-center ml-3">
              <span className="font-semibold text-slate-700">Income</span>
              <span className="text-4xl text-blue-900 font-semibold lg:text-3xl">12,500</span>
            </div>
          </div>
        </div>
        <div className="rounded shadow bg-white h-36  flex justify-start mb-3 lg:mb-0  mr-8 lg:mr-3">
          <div className="flex justify-center  items-center ml-6">
            <div className=" flex justify-center items-center  bg-blue-50 p-2 h-10 w-10 rounded-lg">
              <AiOutlineCalendar className="text-green-600 w-8 h-8 font-bold " />
            </div>
            <div className="flex flex-col justify-center ml-3">
              <span className="font-semibold text-slate-600">Appointments</span>
              <span className="text-4xl text-blue-900 font-semibold lg:text-3xl">211</span>
            </div>
          </div>
        </div>
        <div className="rounded shadow bg-white h-36  flex justify-start mb-3 lg:mb-0 mr-8 lg:mr-6">
          <div className="flex justify-center  items-center ml-6">
            <div className=" flex justify-center items-center  bg-blue-50 p-2 h-10 w-10 rounded-lg">
              <RiHeartPulseLine className="text-pink-500 w-8 h-8 font-bold " />
            </div>
            <div className="flex flex-col justify-center ml-3">
              <span className=" text-slate-600 font-semibold">Treatments</span>
              <span className="text-4xl text-blue-900 font-semibold lg:text-3xl">402</span>
            </div>
          </div>
        </div>
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
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-3">
        <div>
          <div className="flex justify-between mr-3">
            <span className="font-semibold text-slate-600 lg:text-sm">Appointments Requests</span>
            <span className="font-semibold text-blue-400 cursor-pointer text-sm">See All</span>
          </div>
          <AppointmentRequest/>
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