import TopNavigation from './components/TopBar';
import SideBar from './components/SideBar';
import DashboardContent from './components/Dashboard';
import './App.css';

function App() {
  return (
    <div className=' h-full flex flex-col bg-blue-50 '>
      <div className=' h-full flex flex-row  fixed w-full'>
        <div className="bg-white w-1/6 h-full  shadow-lg">
          <SideBar/>
        </div>
        <div className="w-5/6 bg-blue-50 h-full">
          <TopNavigation name="mariat" className="absolute"/>
          <DashboardContent/>
        </div>
      </div>
    </div>
  );
}

export default App;
