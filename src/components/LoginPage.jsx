import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import Logo from '../assets/health-insurance.png';
import heroImg from '../assets/login_image.svg';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [usernameError, setUsernameError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loggedIn, setLoggedIn] = useState(true);
  let navigate = useNavigate();

  function handleNameChange(event) {
    setUsername(event.target.value);
  }
  function handlePasswordChange(event) {
    setPassword(event.target.value);

  }
  function handleRememberMe(event){
    console.log(event.target.checked)
    setLoggedIn(event.target.checked);
  }

  function handleLogin(event) {
    event.preventDefault();
    if(!username || !password || username!=='mariat@gmail.com') {
      setUsernameError('Enter correct username to proceed');
    } else if(password && password !== 'mariat123'){
      setPasswordError('Enter correct password to proceed')
    } else{
      navigate('/dashboard', { replace: true });
    }

  }
  return(
    <div className='h-screen  flex justify-center items-center bg-blue-50'>
        
      <div className=' lg:h-3/4 h-1/2    shadow-2xl rounded-[30px] overflow-hidden 2xl:w-1/2 w-3/4 grid md:grid-cols-5 '>
        <div className='col-span-2 bg-white h-full p-8 flex flex-col justify-center'>
          <div className=' mt-0 ml-4'>
            {/* <img src={Logo} alt="app-logo" className='h-10 w-10 hidden'/> */}
            <h3 className='text-blue-800 font-semibold text-2xl font-sans'>Log in.</h3>
            <p className='text-sm text-slate-400'>Log in with your credentials as provided by the admin</p>
          </div>
          <form onSubmit={handleLogin}>
            <div className='ml-0 mt-4 text-sm flex flex-col p-4'>
              <label className='text-sm'>Enter your username/ email address</label>
              <input type='email' placeholder='mariat@genhealth.com' name='name' className='rounded-sm border  h-10 mt-2 p-1' value={username || ''} onChange={handleNameChange} required autoComplete='false' />
              <small className='text-red-600'>{usernameError}</small>
            </div>
            <div className='ml-0 mt-2 text-sm flex flex-col p-4'>
              <label className='text-sm'>Enter your password</label>
              <input type='password' placeholder='atleast 8 characters' name=' password' className='rounded-sm border  h-10 mt-2 p-1 form-control' value={password || ''} required   onChange={handlePasswordChange}/>
              <small className='text-red-600'>{passwordError}</small>
            </div>
            <div className='p-4 flex flex-col items-start'>
              <button type='submit' className='bg-blue-800 p-2 rounded-md w-full text-white text-center block hover:bg-blue-700' onSubmit={handleLogin}>Log in</button>
              <div className='flex items-center mt-2'>
                <input type='checkbox' checked={loggedIn} onChange={handleRememberMe}/>
                <p className='text-slate-500 text-sm ml-2'>Remember me on this computer</p>
              </div>
            </div>
            <div className='flex justify-center items-center'>
                <p className='text-sm underline text-blue-900 cursor-pointer'>Forgot Password?</p>
              </div>
          </form>
        </div>
        <div className='col-span-3 bg-blue-100  h-full md:flex items-center flex-col justify-center hidden'>
          {/* <p className='txet-slate-700 text-lg mb-4'>Nice to see you again </p> */}
          <p className='text-3xl text-blue-800 mb-10 font-semibold'>Welcome back!</p>
          <img src={heroImg} alt="app-logo" className='h-80 w-100'/>
        </div>
      </div>
    </div>
  );
}



export default LoginPage;