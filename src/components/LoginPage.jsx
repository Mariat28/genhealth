import React from 'react';
import Logo from '../assets/health-insurance.png';
import heroImg from '../assets/login_image.svg';
function LoginPage() {
  return(
    <div className='h-screen  flex justify-center items-center'>
        
      <div className=' lg:h-3/4 h-1/2  shadow-2xl rounded-[30px] overflow-hidden 2xl:w-1/2 w-3/4 grid md:grid-cols-5 '>
        <div className='col-span-2 bg-white h-full p-8 flex flex-col justify-center'>
          <div className=' mt-0 ml-4'>
            {/* <img src={Logo} alt="app-logo" className='h-10 w-10 hidden'/> */}
            <h3 className='text-blue-800 font-semibold text-3xl font-sans'>Log in.</h3>
            <p className='text-md text-slate-400'>Log in with your credentials as provided by the admin</p>
          </div>
          <div>
            <div className='ml-0 mt-4 text-sm flex flex-col p-4'>
              <label className='text-sm'>Enter your username/ email address</label>
              <input type='email' placeholder='mariat@genhealth.com' className='rounded-sm border focus:border-blue-200 h-10 mt-2 p-1' required />
            </div>
            <div className='ml-0 mt-2 text-sm flex flex-col p-4'>
              <label className='text-sm'>Enter your password</label>
              <input type='password' placeholder='atleast 8 characters' className='rounded-sm border focus:border-blue-200 h-10 mt-2 p-1' required />
            </div>
            <div className='p-4 flex flex-col items-center'>
              <button className='bg-blue-800 p-2 rounded-md w-full text-white text-center block'>Log in</button>
              <div className='flex items-center'>
                <input type='checkbox'/>
                <p className='text-slate-500 text-sm ml-2'>Remember me on this computer</p>
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-3 bg-blue-100  h-full flex items-center flex-col justify-center '>
          <p className='text-slate-700 text-lg mb-4'>Nice to see you again </p>
          <p className='text-3xl text-blue-800 mb-10 font-semibold'>Welcome Back!</p>
          <img src={heroImg} alt="app-logo" className='h-80 w-100'/>
        </div>
      </div>
    </div>
  );
};
export default LoginPage;