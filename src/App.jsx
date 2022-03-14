import TopNavigation from './components/TopBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
// import DashboardContent from './components/Dashboard';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className='  flex   bg-blue-50 h-screen'>
          <div className="bg-blue-50 lg:w-60 w-14 fixed top-0 bottom-0 h-full hidden md:block  z-10">
            <SideBar/>
          </div>
          <div className="w-full fixed top-0 z-20">
            <TopNavigation name="mariat" className="fixed top-0 "/>
          </div>
          <div className='lg:ml-60 md:ml-12 w-full overflow-auto overflow-x-hidden mt-20 mainContent relative'>
            <Outlet/>
            <div className='relative h-20 items-end flex justify-center bg-blue-50  '>
            <Footer className="absolute bottom-0 mr-6 "/>
              </div>
          </div>
      </div>
  );
}

export default App;
