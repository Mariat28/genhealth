import TopNavigation from './components/TopBar';
import SideBar from './components/SideBar';
// import DashboardContent from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className=' h-full flex flex-col bg-blue-50 '>
      <div className=' h-full flex flex-row  fixed w-full'>
        <div className="bg-white w-1/6 2xl:w-60 h-full shadow-2xl">
          <BrowserRouter>
           <SideBar/>
          </BrowserRouter>
        </div>
        <div className="w-5/6 2xl:w-full bg-blue-50 h-full">
          <TopNavigation name="mariat" className="absolute"/>
          {/* <DashboardContent/> */}
        </div>
      </div>
    </div>
  );
}

export default App;
