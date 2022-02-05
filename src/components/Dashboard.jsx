import React from "react";
import { HiOutlineUserGroup } from 'react-icons/hi';
import { MdAttachMoney } from 'react-icons/md';
import { AiOutlineCalendar } from 'react-icons/ai';
import { RiHeartPulseLine } from 'react-icons/ri';
import AppointmentListItem from "./AppointmentListItem";
import NextPatient from "./NextPatientItem";
function DashboardContent() {
  return(
    <div className="mt-30 ml-4 w-full  mainContent">
      {/* metrics row  */}
      <div className="grid lg:grid-cols-4 grid-cols-1  h-fit">
        <div className="rounded shadow bg-white h-36  flex justify-start mb-3 lg:mb-0 mr-8 lg:mr-3">
          <div className="flex justify-center  items-center ml-6">
            <div className=" flex justify-center items-center  bg-blue-50 p-2 h-10 w-10 rounded-lg">
              <HiOutlineUserGroup className="w-8 h-8 font-bold text-purple-500" />
            </div>
            <div className="flex flex-col justify-center ml-3">
              <span className="font-semibold text-slate-600">Patients</span>
              <span className="text-4xl text-blue-900 font-semibold">600</span>
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
              <span className="text-4xl text-blue-900 font-semibold">12,500</span>
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
              <span className="text-4xl text-blue-900 font-semibold">211</span>
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
              <span className="text-4xl text-blue-900 font-semibold">402</span>
            </div>
          </div>
        </div>
      </div>
      {/* upcoming Appointments */}
      <div className="grid grid-cols-2 mt-3">
        <div className="mr-3">
          <span className="font-semibold text-slate-600">Today's Appointments</span>
          <AppointmentListItem/>
        </div>
        <div className="ml-1">
          <span className="font-semibold text-slate-600">Next Patient Details</span>
          <NextPatient/>
        </div>
      </div>

    </div>
  )
  
}
export default DashboardContent;