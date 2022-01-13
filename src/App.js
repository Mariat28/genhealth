import TopNavigation from './components/TopBar';
import SideBar from './components/SideBar';
import './App.css';

function App() {
  return (
    <div className=' h-full flex flex-row bg-blue-50 '>
      <div class="bg-white w-1/6 h-full shadow-lg">
        <SideBar/>
      </div>
      <div class="w-5/6 bg-blue-50 h-full">
        <TopNavigation name="mariat"/>
      </div>
    </div>
  );
}

export default App;
