import TopNavigation from './components/TopBar';
import SideBar from './components/SideBar';
// import DashboardContent from './components/Dashboard';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className='  flex  bg-blue-50 h-screen
    '>
        <div className="bg-white w-60 fixed top-0 bottom-0 h-full shadow-2xl z-10">
           <SideBar/>
        </div>
        <div className="w-full  bg-blue-50 fixed top-0">
          <TopNavigation name="mariat" className="fixed top-0"/>
          </div>
          <div className='ml-60  w-full overflow-auto overflow-x-hidden mt-20'>
            <Outlet/>
          </div>
    </div>
  );
}

export default App;
