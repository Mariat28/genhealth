import TopNavigation from './components/TopBar';
import SideBar from './components/SideBar';
import Footer from './components/Footer';
// import DashboardContent from './components/Dashboard';
import { Outlet } from 'react-router-dom';
import './App.css';

function App() {
  return (
      <div className='  flex   bg-blue-50 h-screen'>
          <div className="bg-blue-50 lg:w-60 w-14 fixed top-0 bottom-0 h-full hidden md:block  z-20">
            <SideBar/>
          </div>
          <div className="w-full fixed top-0 ">
            <TopNavigation name="mariat" className="fixed top-0 "/>
          </div>
          <div className='lg:ml-60 md:ml-12 w-full overflow-auto overflow-x-hidden mt-20 mainContent relative parent-container'>
            <Outlet/>
          </div>
          <Footer/>
      </div>
  );
}

export default App;
