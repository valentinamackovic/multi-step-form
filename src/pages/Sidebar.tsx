import sidebarBg from '../assets/bg-sidebar-desktop.svg';
import { useNavigationContext } from '../context/NavigationContext';

interface StepProps {
  number: number;
  text: string;
}

function Step({ number, text }: StepProps) {
  const { step } = useNavigationContext();

  return (
    <div className="flex w-full items-center">
      <div
        className={`w-9 h-9 rounded-full border border-solid text-center flex items-center justify-center ${step === number && 'bg-blue-200 text-blue-800'}`}
      >
        {number}
      </div>
      <div className="ml-3">
        <p className="text-xs text-slate-300/50">STEP {number}</p>
        <p className="uppercase font-semibold text-sm">{text}</p>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="h-full w-1/3 relative text-white p-8 space-y-6">
      <img
        src={sidebarBg}
        className="h-full w-full object-cover rounded-md absolute top-0 left-0 -z-50"
        alt="Sidebar background"
      />
      <Step number={1} text="Your info" />
      <Step number={2} text="Select plan" />
      <Step number={3} text="Add-ons" />
      <Step number={4} text="Summary" />
    </div>
  );
}

export default Sidebar;
