import { useNavigationContext } from '../context/NavigationContext';
import iconCheckmark from '../assets/icon-checkmark.svg';
import Button from '../components/Button';
import Link from '../components/Link';
import { Container, Content, Footer, Header } from '../components/Layout';
import { addOns } from '../const';
import { useFormContext } from '../context/FormContext';

interface AddOnCardProps {
  name: string;
  description: string;
  selected: boolean;
  onClick: () => void;
  price: number;
}

function AddOnCard({
  name,
  description,
  price,
  selected,
  onClick,
}: AddOnCardProps) {
  return (
    <div
      onClick={onClick}
      className={`flex text-sm border border-solid rounded-md py-3 px-4 justify-between items-center min-w-96 cursor-pointer hover:border-indigo-400 duration-200 ${selected ? 'border-indigo-400 transition-colors bg-slate-50' : ''}`}
    >
      <div className="flex flex-row space-x-4 items-center">
        <div
          className={`w-4 h-4 rounded-sm border border-solid flex justify-center items-center duration-100 ${selected ? 'transition-colors border-indigo-600 bg-indigo-600' : ''}`}
        >
          {selected && <img src={iconCheckmark} />}
        </div>
        <div>
          <p>{name}</p>
          <p className="text-xs text-slate-400">{description}</p>
        </div>
      </div>
      <p className="text-xs text-indigo-600">+${price}/mo</p>
    </div>
  );
}

function toggleNumber(array: number[], num: number): number[] {
  const set = new Set(array);

  if (set.has(num)) {
    set.delete(num); // Remove the number if it exists
  } else {
    set.add(num); // Add the number if it doesn't exist
  }

  return Array.from(set); // Convert Set back to array
}

function AddOns() {
  const { getField, changeValue } = useFormContext();
  const { value } = getField('addOns');
  const { setStep } = useNavigationContext();

  function toggleAddOn(num: number) {
    changeValue({
      name: 'addOns',
      value: toggleNumber(value as number[], num),
    });
  }

  return (
    <Container>
      <Header
        title="Pick add-ons"
        description="Add-ons help enhance your gaming experience."
      />
      <Content>
        {addOns.map((addOn, i) => (
          <AddOnCard
            key={addOn.name}
            name={addOn.name}
            description={addOn.description}
            price={addOn.price}
            selected={(value as number[]).includes(i) ?? false}
            onClick={() => toggleAddOn(i)}
          />
        ))}
      </Content>
      <Footer>
        <Link
          onClick={() => {
            setStep(2);
          }}
        >
          Go Back
        </Link>
        <Button
          onClick={() => {
            setStep(4);
          }}
        >
          Next Step
        </Button>
      </Footer>
    </Container>
  );
}

export default AddOns;
