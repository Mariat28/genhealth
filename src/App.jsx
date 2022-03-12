import TopNavigation from './components/TopBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
// import DashboardContent from './components/Dashboard';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className='  flex   bg-blue-50 h-screen'>
          <div className="bg-blue-50 w-60 fixed top-0 bottom-0 h-full  z-10">
            <SideBar className="lg:visible"/>
          </div>
          <div className="w-full fixed top-0">
            <TopNavigation name="mariat" className="fixed top-0 "/>
          </div>
            <div className='ml-60  w-full overflow-auto overflow-x-hidden mt-20 mainContent relative'>
              <Outlet/>
              <div className='relative h-20 items-end flex justify-center bg-blue-50 shadow '>
              <Footer className="absolute bottom-0 mr-6 "/>
                </div>
            </div>
      </div>
  );
}

export default App;
