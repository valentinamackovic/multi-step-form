import { Profiler } from 'react';
import './App.css';
import PersonalInfo from './pages/PersonalInfo';
import SelectPlan from './pages/SelectPlan';
import Sidebar from './pages/Sidebar';
import { useNavigationContext } from './context/NavigationContext';
import AddOns from './pages/AddOns';
import Summary from './pages/Summary';
import Finished from './pages/Finished';

function App() {
  const { step } = useNavigationContext();

  const displayPage = () => {
    switch (step) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Summary />;
      case 5:
        return <Finished />;
      default:
        return <></>;
    }
  };

  function onRender(
    id: any,
    phase: any,
    actualDuration: any,
    baseDuration: any,
    startTime: any,
    commitTime: any
  ) {
    console.log(
      `id: ${id}; phase: ${phase}; actualDurations: ${actualDuration}; baseDuration: ${baseDuration}; startTime: ${startTime}; commitTime: ${commitTime}`
    );
  }

  return (
    <Profiler id="App" onRender={onRender}>
      <div id="App" className="container flex h-screen w-screen md:max-w-full">
        <div className="m-5 w-full flex">
          <Sidebar />
          {displayPage()}
        </div>
      </div>
    </Profiler>
  );
}

export default App;
