import TopNavigation from './components/TopBar';
import './App.css';

function App() {
  return (
    <div className=' h-screen flex flex-row '>
      <div class="bg-white w-1/6 h-full shadow">

      </div>
      <div class="w-5/6 bg-neutral-50 h-full">
        <TopNavigation name="mariat"/>
      </div>
    </div>
  );
}

export default App;
