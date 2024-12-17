import arcadeIcon from '../assets/icon-arcade.svg';
import advancedIcon from '../assets/icon-advanced.svg';
import proIcon from '../assets/icon-pro.svg';
import { useNavigationContext } from '../context/NavigationContext';
import { useFormContext } from '../context/FormContext';
import { PlanEnum, plans, PlanTypeEnum } from '../const';
import Button from '../components/Button';
import Link from '../components/Link';
import { Container, Content, Footer, Header } from '../components/Layout';

interface OptionCardProps {
  icon: string;
  name: string;
  price: string;
  selected?: boolean;
  onClick?: () => void;
}

function OptionCard({ icon, name, price, selected, onClick }: OptionCardProps) {
  return (
    <div
      className={`flex flex-col border border-solid rounded-xl hover:border-indigo-400 cursor-pointer h-48 min-w-36 p-4 text-sm justify-between duration-200 ${selected ? 'transition-colors bg-slate-50 border-indigo-400' : ''}`}
      onClick={onClick}
    >
      <img className="h-8 self-start" src={icon} />
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-xs text-slate-400">${price}/mo</p>
      </div>
    </div>
  );
}

interface SwitchProps {
  isOn: boolean;
  setIsOn: (value: boolean) => void;
}

function Switch({ isOn, setIsOn }: SwitchProps) {
  const handleClick = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className={`border-solid border border-indigo-900 duration-200 rounded-full w-9 m-1 px-1 py-0.5 flex items-center cursor-pointer ${
          isOn ? '' : 'transition-colors bg-indigo-900'
        }`}
        onClick={handleClick}
      >
        <div
          className={`rounded-full w-3 h-3 transition-transform duration-500 ease-in-out ${
            isOn ? 'bg-indigo-900' : 'transform translate-x-4 bg-white'
          }`}
        ></div>
      </div>
    </>
  );
}

function SelectPlan() {
  const { setStep } = useNavigationContext();
  const { getField, changeValue, validate } = useFormContext();
  const { value: planValue } = getField('plan');
  const { value: planTypeValue } = getField('planType');

  const switchIsOn = planTypeValue === 'monthly';

  return (
    <Container>
      <Header
        title="Select your plan"
        description="You have the option of monthly or yearly billing."
      />
      <Content>
        <div className="flex w-full space-x-6">
          <OptionCard
            selected={planValue === PlanEnum.arcade}
            onClick={() =>
              changeValue({ name: 'plan', value: PlanEnum.arcade })
            }
            icon={arcadeIcon}
            name="Arcade"
            price={
              planTypeValue === PlanTypeEnum.yearly
                ? plans.yearly.arcade.price.toString()
                : plans.monthly.arcade.price.toString()
            }
          />
          <OptionCard
            selected={planValue === PlanEnum.advanced}
            onClick={() =>
              changeValue({ name: 'plan', value: PlanEnum.advanced })
            }
            icon={advancedIcon}
            name="Advanced"
            price={
              planTypeValue === PlanTypeEnum.yearly
                ? plans.yearly.advanced.price.toString()
                : plans.monthly.advanced.price.toString()
            }
          />
          <OptionCard
            selected={planValue === PlanEnum.pro}
            onClick={() => changeValue({ name: 'plan', value: PlanEnum.pro })}
            icon={proIcon}
            name="Pro"
            price={
              planTypeValue === PlanTypeEnum.yearly
                ? plans.yearly.pro.price.toString()
                : plans.monthly.pro.price.toString()
            }
          />
        </div>
        <div className="flex mt-4 space-x-6 justify-center text-sm items-center bg-slate-50 p-2 rounded-md">
          <p
            className={`duration-500 ${switchIsOn ? 'text-inherit' : 'transition-colors text-slate-400'}`}
          >
            Monthly
          </p>
          <Switch
            isOn={switchIsOn}
            setIsOn={() => {
              const planTypeNewValue =
                planTypeValue === PlanTypeEnum.yearly
                  ? PlanTypeEnum.monthly
                  : PlanTypeEnum.yearly;

              changeValue({ name: 'planType', value: planTypeNewValue });
            }}
          />
          <p
            className={`duration-500 ${switchIsOn ? 'transition-colors text-slate-400' : 'text-inherit'}`}
          >
            Yearly
          </p>
        </div>
      </Content>
      <Footer>
        <Link
          onClick={() => {
            setStep(1);
          }}
        >
          Go Back
        </Link>
        <Button
          onClick={() => {
            validate() && setStep(3);
          }}
        >
          Next Step
        </Button>
      </Footer>
    </Container>
  );
}

export default SelectPlan;
