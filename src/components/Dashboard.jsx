import React from "react";
import { IoIosArrowDroprightCircle } from 'react-icons/io';
import { MdMapsHomeWork, MdPhoneInTalk } from 'react-icons/md';

function DashboardContent() {
  return(
    <div className="mt-4 ml-4 h-5/6">
      <div className="flex h-1/2">
        <div className="shadow-md w-3/5 rounded-sm dashboardWelcomeCard">
          <div className="flex items-center mt-6 ml-4 font-sans">
            <h2 className="font-bold text-white text-2xl">Good Morning,</h2>
            <p className="text-2xl text-white pl-2 antialiased">Dr Mariat.</p>
          </div>
          <div className="mt-20 ml-4 mr-8 font-sans flex justify-between items-center">
            <h4 className="uppercase text-sm text-white ">appointment statistics</h4>
            <div className="h-fit bg-slate-800 rounded-md pt-2 pb-1">
              <button className="bg-white text-slate-900 rounded-md py-1 px-6">Monthly</button>
              <button className=" rounded-md py-1 px-6 text-white">Weekly</button>
              <button className="text-white rounded-md py-1 px-6">30 days</button>
            </div>
          </div>
        </div>
        <div className="w-2/5 shadow-md rounded-sm bg-white ml-4 mr-4 divide-y p-4">
          <div className="h-1/2 divide-x flex">
              <div className="w-1/2 flex flex-col justify-between">
                <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">approval request</h4>
                <div className="mt-8 mb-8 text-slate-400 flex flex-col">
                  <p className="text-4xl">26</p>
                  <p className="text-sm mt-1">Request Waiting To Approve</p>
                </div>
                <div className="flex items-center justify-between w-3/4 2xl:w-1/2 rounded-full bg-blue-50 mb-6 mr-4 p-3">
                    <p className="font-bold text-sm">More</p>
                    <IoIosArrowDroprightCircle className="text-blue-700 h-6 w-6" />

                </div>
              </div>
              <div className="w-1/2 pl-2 flex flex-col justify-between">
                <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">upcoming appointments</h4>
                  <p className="text-4xl mt-8 mb-8 text-slate-400">14</p>
                  <div className="flex items-center justify-between w-3/4 2xl:w-1/2 rounded-full bg-blue-50 mb-6 mr-4 p-3">
                    <p className="font-bold text-sm">More</p>
                    <IoIosArrowDroprightCircle className="text-blue-700 h-6 w-6" />
                  </div>
              </div>
          </div>
          <div className="h-1/2 pt-2 flex flex-col justify-between">
            <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">clinic information</h4>
            <div className="flex text-slate-500 items-center pt-4">
              <MdMapsHomeWork/>
              <p className="text-sm ml-2">7889 Kampala Rd Kampala Plaza, City One 12345 Uganda</p>
            </div>
            <div className="flex text-slate-500 items-center pt-4">
              <MdPhoneInTalk/>
              <p className="text-sm ml-2">(+256) 705-976941 - (+256) 705-976941</p>
            </div>
            <div className="flex items-center justify-between w-1/2 2xl:w-1/5 rounded-full bg-blue-50 mb-4 mr-4 p-3">
                <p className="font-bold text-sm">More</p>
                <IoIosArrowDroprightCircle className="text-blue-700 h-6 w-6" />
              </div>
          </div>

        </div>
      </div>
      <div className="flex h-1/2 shadow-md rounded-sm mt-4 mr-4 p-4 pt-1 items-center">
        <div className="w-1/4 bg-white  h-3/4 rounded-sm shadow-md p-2">
        <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">today's appointment (4)</h4>
        </div>
        <div className="w-1/4 bg-white  h-3/4 ml-4 rounded-sm shadow-md p-2">
        <h4 className="uppercase text-slate-700 text-sm font-bold antialiased"> top treatment</h4>
        </div>
        <div className="w-1/4 bg-white  h-3/4 ml-4 rounded-sm shadow-md"></div>
        <div className="w-1/4 bg-white  h-3/4 ml-4 rounded-sm shadow-md"></div>
      </div>
    </div>
  )
  
}
export default DashboardContent;