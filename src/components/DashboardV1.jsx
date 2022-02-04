import { MdMapsHomeWork, MdPhoneInTalk } from 'react-icons/md';
import {IoIosArrowDroprightCircle } from ' react/io';
function DashboardV1() {
    return (
    <div className="mt-30 ml-4 w-full  grid grid-rows-3 gap-2">
      <div className="grid xl:grid-cols-3 row-span-2 pl-0 pt-0 pr-2">
        <div className="shadow-xl  xl:col-span-2  rounded-sm dashboardWelcomeCard">
          <div className="flex items-center mt-6 ml-4 font-sans">
            <h2 className="font-bold text-white text-2xl">Good Morning,</h2>
            <p className="text-2xl text-white pl-2 antialiased">Dr Mariat.</p>
          </div>
          <div className="mt-20 ml-4 mr-8 font-sans flex justify-between flex-wrap items-center">
            <h4 className="uppercase text-sm text-white ">appointment statistics</h4>
            <div className="h-fit bg-slate-800 rounded-md pt-2 pb-1">
              <button className="bg-white text-slate-900 rounded-md py-1 px-6">Monthly</button>
              <button className=" rounded-md py-1 px-6 text-white">Weekly</button>
              <button className="text-white rounded-md py-1 px-6">30 days</button>
            </div>
          </div>
        </div>
        <div className=" shadow-xl rounded-sm  ml-4 mr-4 grid grid-rows-2   divide-y p-4 ">
          {/* first row stats  */}
          <div className=" xl:divide-x grid xl:grid-cols-2 grid-cols-1 lg:divide-y xl:divide-y-0 overflow-auto ">
              <div className="flex flex-col justify-between ">
                <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">approval request</h4>
                <div className="mt-8 mb-8 text-slate-400 flex flex-col">
                  <p className="text-4xl">26</p>
                  <p className="text-sm mt-1">Request Waiting To Approve</p>
                </div>
                <div className="flex items-center justify-between w-3/4 2xl:w-1/2 rounded-full bg-blue-100 mb-6 mr-4 p-3">
                    <p className="font-bold text-sm">More</p>
                    <IoIosArrowDroprightCircle className="text-blue-700 h-6 w-6" />
                </div>
              </div>
              <div className="pl-2 flex flex-col justify-between">
                <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">upcoming appointments</h4>
                  <p className="text-4xl mt-8 mb-8 text-slate-400">14</p>
                  <div className="flex items-center justify-between w-3/4 2xl:w-1/2 rounded-full bg-blue-100 mb-6 mr-4 p-3">
                    <p className="font-bold text-sm">More</p>
                    <IoIosArrowDroprightCircle className="text-blue-700 h-6 w-6" />
                  </div>
              </div>
          </div>
          {/* clinic info  */}
          <div className=" pt-2 mt-1 flex flex-col justify-between">
            <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">clinic information</h4>
            <div className="flex text-slate-500 items-center pt-4">
              <MdMapsHomeWork/>
              <p className="text-sm ml-2">7889 Kampala Rd Kampala Plaza, City One 12345 Uganda</p>
            </div>
            <div className="flex text-slate-500 items-center pt-4">
              <MdPhoneInTalk/>
              <p className="text-sm ml-2">(+256) 705-976941 - (+256) 705-976941</p>
            </div>
            <div className="flex items-center justify-between w-1/2 2xl:w-1/5 rounded-full bg-blue-100 mb-4 mr-4 p-3">
                <p className="font-bold text-sm">More</p>
                <IoIosArrowDroprightCircle className="text-blue-700 h-6 w-6" />
              </div>
          </div>

        </div>
      </div>
      <div className=" rounded-sm mt-2 mr-2 p-4 pl-0 pt-1 items-start  grid 2xl:grid-cols-4  grid-cols-1 lg:grid-cols-2 row-span-1  ">
        <div className=" bg-white h-full ml-0 p-2 mt-2 rounded-sm shadow-xl">
          <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">today's appointment (4)
          </h4>
          <div className="flex items-center mt-5 justify-between ">
            <div className="flex items-center justify-center ">
              <p className="text-6xl 2xl:text-8xl text-slate-400">4</p>
            </div>
            <div className=" w-3/4 p-2 ">
              <div className="rounded-md shadow-sm mt-4 bg-blue-50 flex justify-between p-4 ml-0 items-center">
                <div className="text-sm">
                  <p className="text-slate-400">Treatment</p>
                  <p className="font-bold">Consultation</p>
                </div>
                <p className="text-slate-400 ml-4 text-sm">09:00-10:00</p>
              </div>
              <div className="rounded-md shadow-sm mt-4 bg-blue-50 flex justify-between p-4 ml-0 items-center">
                <div className="text-sm">
                  <p className="text-slate-400">Treatment</p>
                  <p className="font-bold">Open Access</p>
                </div>
                <p className="text-slate-400 ml-4 text-sm">10:00-11:00</p>
              </div>
              <div className="rounded-md shadow-sm mt-4 bg-blue-50 flex justify-between p-4 ml-0 items-center">
                <div className="text-sm">
                  <p className="text-slate-400">Treatment</p>
                  <p className="font-bold">Scaling</p>
                </div>
                <p className="text-slate-400 ml-4 text-sm">11:00-12:00</p>
              </div>
            </div>

          </div>
        </div>
        <div className=" bg-white h-full  ml-4 mt-2 rounded-sm shadow-xl p-2">
        <h4 className="uppercase text-slate-700 text-sm font-bold antialiased"> top treatment</h4>
        </div>
        <div className=" bg-white  h-full xl:ml-4 lg:ml-0 ml-0 mt-2  rounded-sm shadow-xl p-2">
        <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">total patients this month</h4>
        </div>
        <div className=" bg-white h-full  ml-4 mt-2  rounded-sm shadow-xl p-2">
        <h4 className="uppercase text-slate-700 text-sm font-bold antialiased">total income </h4>
        </div>
      </div>
    </div>
    )
}
export default DashboardV1;